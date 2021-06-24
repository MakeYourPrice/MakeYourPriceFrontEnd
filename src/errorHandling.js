import Vue from 'vue';

window.addEventListener('unhandledrejection', (event) => {
  if (event.reason.message === 'Network Error') {
    Vue.swal.fire({
      icon: 'error',
      title: 'Oops...',
      text:
        'Não foi possivel se conectar com o servidor, por favor verifique a sua conexão com '
        + 'a internet',
      timer: 4000,
      timerProgressBar: true,
    });
  }
});
