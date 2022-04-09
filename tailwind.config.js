module.exports = {
  mode:'jit',
  purge:['./src/**/*.html'],
  content: [],
  theme: {
    extend: {
        colors:{
          dzgn:'#4700D8',
          twitter:'#1DA1F2'
        },
        spacing:{
          '15':'3.75rem'
        },
        zIndex:{
          '-1':'-1'
        }
    },
  },
  plugins: [],
}
