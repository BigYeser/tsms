<template>
  <Layout :title="$t('edit_x', { x: this.$t('Order Number', { x: this.order.id }) })">
   
  </Layout>
</template>

<script>
import Layout from '@/Shared/Layout.vue';
import debounce from 'lodash/debounce';
import FileInput from '@/Shared/FileInput.vue';
import TextInput from '@/Shared/TextInput.vue';
import DeleteMixin from '@/Misc/DeleteMixin';
import Modal from '@/Jetstream/Modal.vue';
import SelectInput from '@/Shared/SelectInput.vue';
import TextareaInput from '@/Shared/TextareaInput.vue';
import LoadingButton from '@/Shared/LoadingButton.vue';
import TrashedMessage from '@/Shared/TrashedMessage.vue';
import MeasurementForm from '@/Pages/Measurements/Form.vue';
import DeleteRestoreComponent from '@/Shared/DeleteRestoreComponent.vue';

export default {
  // layout: Layout,
  mixins: [DeleteMixin('order')],
  props: { order: Object, members: Array, taxes: Array, iservices: Array, icustomers: Array },
  components: {
    Modal,
    Layout,
    FileInput,
    TextInput,
    SelectInput,
    TextareaInput,
    LoadingButton,
    TrashedMessage,
    MeasurementForm,
    DeleteRestoreComponent,
  },
  data() {
    return {
      restore: false,
      sending: false,
      addMM: false,
      ddData: null,
      form: {
        date: this.order.date,
        reference: this.order.reference,
        customer_id: this.order.customer.id,
        assigned_to: this.order.assigned_to ? this.order.assigned_to.id : '',
        delivery_date: this.order.delivery_date,
        status: this.order.status,
        priority: this.order.priority,
        amount: this.order.amount,
        note: this.order.note,
        services: this.order.services,
        customer: this.order.customer,
        taxes: this.order.taxes.map(t => {
          t.value = t.id;
          t.label = t.name;
          return t;
        }),
        discount: this.order.discount,
        discount_amount: this.order.discount_amount,
      },
      staff: {},
      tax: null,
      allTaxes: [],
      services: [],
      service: null,
      customers: [],
      priority: null,
      staff_members: [],
      customer: { label: this.order.customer.name, value: this.order.customer.id },
      priorities: [
        { label: this.$t('Normal'), value: 1 },
        { label: this.$t('High'), value: 2 },
        { label: this.$t('Urgent'), value: 3 },
      ],
    };
  },
  computed: {
    discountAmount() {
      if (!this.form.discount) {
        return 0;
      }
      if (this.form.discount.indexOf('%') !== -1) {
        var discount = this.form.discount.split('%');
        return parseFloat(this.totalAmount * (parseFloat(discount) / 100), 4);
      }
      return parseFloat(this.form.discount);
    },
    compoundTaxes() {
      return this.form.taxes.filter(t => t.compound);
    },
    nonCompoundTaxes() {
      return this.form.taxes.filter(t => !t.compound);
    },
    nonCompoundTaxesAmount() {
      return this.nonCompoundTaxes.reduce((a, t) => a + this.calculateTax(t, false), 0);
    },
    taxAmount() {
      return this.nonCompoundTaxesAmount + this.compoundTaxes.reduce((a, t) => a + this.calculateTax(t, true), 0);
    },
    totalAmount() {
      return this.form.services.reduce((a, s) => parseFloat(s.price) * parseFloat(s.qty) + a, 0);
    },
    totalQuantity() {
      return this.form.services.reduce((a, s) => parseFloat(s.qty) + a, 0);
    },
  },
  mounted() {
    if (this.order.assigned_to) {
      this.staff = { label: this.order.assigned_to.name, value: this.order.assigned_to.id };
      this.members.push(this.staff);
    }
    this.allTaxes = this.taxes;
    this.services = this.iservices;
    this.customers = this.icustomers;
    this.customers.push(this.customer);
    this.staff_members = this.members;
    this.form.priority = this.priorities.find(p => p.value == this.order.priority);
    this.form.services = this.order.services.map(s => {
      s.id = s.service_id;
      return s;
    });
  },
  methods: {
    addToOrder(s) {
      let measurements = this.getServiceMeasurements(s.id);
      this.form.services.push({ ...s, service_id: s.id, qty: 1, measurement_id: measurements ? measurements[0]['id'] : null });
    },
    calculateTax(tax, compound = false) {
      if (compound) {
        return (this.totalAmount - this.discountAmount + this.nonCompoundTaxesAmount) * (parseFloat(tax.rate) / 100);
      }
      return (this.totalAmount - this.discountAmount) * (parseFloat(tax.rate) / 100);
    },
    updateCustomerMeasurement(m) {
      this.form.customer.measurements.push(m);
      this.form.services = this.form.services.map(s => {
        if (s.service_id == m.service_id) {
          s.measurement_id = m.id;
        }
        return s;
      });
    },
    addMeasurement(sid) {
      let service = this.services.find(os => os.id == sid);
      service = { label: service.name, value: service.id, measurement_fields: service.measurement_fields };
      let customer = this.customer;
      let name = customer.label + "'s " + service.label;
      this.ddData = { name, service, customer };
      this.addMM = true;
    },
    getServiceMeasurements(sid) {
      if (this.form.customer) {
        let measurements = this.form.customer.measurements.filter(m => m.service_id == sid);
        return measurements && measurements.length ? measurements : false;
      }
    },
    deleteService(si) {
      this.form.services.splice(si, 1);
    },
    staffChanged(s) {
      this.staff = s ? s : null;
      this.form.assigned_to = s ? s.value : null;
    },
    priorityChanged(p) {
      this.priority = p ? p : null;
      this.form.priority = p ? p.value : null;
    },
    customerChanged(c) {
      this.customer = c ? c : null;
      this.form.customer = c ? c : null;
      this.form.customer_id = c ? c.value : null;
      this.form.services = this.form.services.map(s => {
        s.measurement = null;
        s.measurement_id = null;
        return s;
      });
    },
    searchCustomers(search, loading) {
      if (search) {
        loading(true);
        this.searchingCustomers(loading, search, this);
      }
    },
    searchingCustomers: debounce((loading, search, vm) => {
      fetch(vm.route('ajax.customers') + '?measurements=1&search=' + escape(search)).then(res => {
        res.json().then(data => (vm.customers = data));
        loading(false);
      });
    }, 350),
    searchServices(search, loading) {
      if (search) {
        loading(true);
        this.searchingServices(loading, search, this);
      }
    },
    searchingServices: debounce((loading, search, vm) => {
      fetch(vm.route('ajax.services') + '?full=1&search=' + escape(search)).then(res => {
        res.json().then(data => (vm.services = data));
        loading(false);
      });
    }, 350),
    searchStaff(search, loading) {
      if (search) {
        loading(true);
        this.searchingStaff(loading, search, this);
      }
    },
    searchingStaff: debounce((loading, search, vm) => {
      fetch(vm.route('ajax.staff') + '?search=' + escape(search)).then(res => {
        res.json().then(data => (vm.staff_members = data));
        loading(false);
      });
    }, 350),
    submit() {
      this.sending = true;
      var data = new FormData();
      data.append('reference', this.form.reference || '');
      data.append('customer_id', this.form.customer_id || '');
      data.append('assigned_to', this.form.assigned_to || '');
      data.append('delivery_date', this.form.delivery_date || '');
      data.append('status', this.form.status || '');
      data.append('priority', this.form.priority ? this.form.priority.value : '' || '');
      data.append('note', this.form.note || '');
      data.append('discount', this.form.discount || '');
      data.append('photo', this.form.photo || '');
      data.append('_method', 'put');
      if (this.form.taxes && this.form.taxes.length) {
        this.form.taxes.map((t, i) => {
          data.append('taxes[' + i + '][id]', t.id);
          data.append('taxes[' + i + '][code]', t.code);
          data.append('taxes[' + i + '][name]', t.name);
          data.append('taxes[' + i + '][rate]', t.rate);
          data.append('taxes[' + i + '][compound]', t.compound);
        });
      } else {
        data.append('taxes', []);
      }
      this.form.services.map((s, i) => {
        data.append('services[' + i + '][id]', s.id);
        data.append('services[' + i + '][qty]', s.qty);
        data.append('services[' + i + '][code]', s.code);
        data.append('services[' + i + '][name]', s.name);
        data.append('services[' + i + '][price]', s.price);
        data.append('services[' + i + '][color]', s.color);
        data.append('services[' + i + '][product_code]', s.product_code);
        data.append('services[' + i + '][service_id]', s.service_id);
        data.append('services[' + i + '][measurement_id]', s.measurement_id);
      });

      this.$inertia.post(this.route('orders.update', this.order.id), data, {
        onFinish: () => (this.sending = false),
      });
    },
  },
};
</script>
