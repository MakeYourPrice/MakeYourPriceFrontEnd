export default {
  methods: {
    /**
     * @param {string} titulo
     * @returns {Promise<SweetAlertResult<Awaited<any>>>}
     */
    notifySucess(titulo) {
      return this.$swal.fire({
        toast: true,
        position: 'top-left',
        icon: 'success',
        timer: 2000,
        title: titulo,
      });
    },
  },
};
