export let nombreCurso = "Angular";
let curso = {
  getNombreCurso: function () {
    return nombreCurso;
  },
  setNombreCurso: function (newNombreCurso) {
    nombreCurso = newNombreCurso;
  },
};

export default curso;
