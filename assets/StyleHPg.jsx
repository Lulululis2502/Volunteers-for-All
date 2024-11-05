import { StyleSheet } from "react-native";

export default StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
    text:{
        color: "#fff", 
        textAlign: "center" ,
        fontSize: 20,
        fontWeight:"bold"
    },
    
    logo: {
        width: 160,
        height:160,
        position: 'absolute',
        top: 190,
        /* resizeMode: 'contain' deixa a imagem responsiva com o tamanho do container */
    },

    circulos: {
        /* width 100%: util para adaptar o elemento ao tamanho da tela */
        width: '100%', 
        /* mantem a proporção da largura para altura e evita que ela perca isso se a tela for redimensionada */
        aspectRatio: 578 / 229,
        position: 'absolute',
        top: -4
    },

    botaoINSTI: {
        width: 320,
        height: 69,
        top: 420,
        backgroundColor: "#BDA47E",
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: "center",
        position: "absolute",
        elevation: 3,
    
    },

    botaoVOLUN: {
        width: 320,
        height: 69,
        top: 516,
        backgroundColor: "#8D6E4A",
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: "center",
        position: "absolute",
        elevation: 3,
    
    },

    containerlog: {
    alignItems: 'flex-start',
    padding: 20,
    justifyContent:"center",
    width: '100%',
    top: 100,
},
    text1: {
        color: "black", 
       fontSize: 20,
        fontWeight:"normal",
        textAlign: `left`,
    },
      email: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%', // Ajuste a largura conforme necessário
        paddingHorizontal: 10,
        borderRadius: 10,
        fontSize: 20,
      
      },
      senha: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 1,
      width: '100%', // Ajuste a largura conforme necessário
      paddingHorizontal: 10,
      borderRadius: 10,
      fontSize: 20,

  },
  botaoVOLUNlogin: {
      paddingHorizontal: 10,
      borderRadius: 40,
      backgroundColor: "#8D6E4A",
      alignItems: "center",
        height: 50,
        width: '100%',
        justifyContent:"center",
        elevation: 3,
        top: 50,
  },

  botaoVOLUNCad: {
    paddingHorizontal: 10,
    borderRadius: 40,
    alignItems: "center",
      height: 50,
      width: '100%',
      justifyContent:"center",
      top: 60,
      right: 0.5,
  },

  text2: {
    color: "black", 
    fontSize: 20,
     fontWeight:"bold",
     textAlign: `center`,  
  }, 
  nome: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%', // Ajuste a largura conforme necessário
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 20,
  
  },
  confisenha: {
  height: 50,
  borderColor: 'gray',
  borderWidth: 1,
  width: '100%', // Ajuste a largura conforme necessário
  paddingHorizontal: 10,
  borderRadius: 10,
  fontSize: 20,
  },
  CPF: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%', // Ajuste a largura conforme necessário
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 20,
    },
    botaoVOLUNsignup: {
      paddingHorizontal: 10,
      borderRadius: 40,
      backgroundColor: "#8D6E4A",
      alignItems: "center",
        height: 50,
        width: '100%',
        justifyContent:"center",
        elevation: 3,
        top: 35,
  },
});
