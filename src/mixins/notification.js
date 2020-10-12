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

    /**
     *
     * @param {string} titulo
     * @returns {Promise<SweetAlertResult<Awaited<any>>>}
     */
    notifyError(titulo) { // TODO arrumar essa notificacao
      return this.$swal.fire({
        toast: true,
        position: 'bottom',
        icon: 'error',
        timer: 40000,
        customClass: {
          container: 'toast-error',
        },
        title: titulo,
        background: '#c62828',
        iconColor: '#fff',
      });
    },
  },
};
