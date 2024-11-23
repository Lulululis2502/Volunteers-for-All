import Checkbox from "expo-checkbox";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

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

    circulo: {
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
    padding: 40,
    justifyContent:"center",
    width: '100%',
    top: 100,
    gap: 15
},

containerlog2: {
  alignItems: 'flex-start',
  padding: 40,
  justifyContent:"center",
  width: '100%',
  top: 20,
  gap: 10
},

Viewbotaoong:{
  alignItems: 'flex-start',
  padding: 20,
  justifyContent:"center",
  width: "90%",
  top: -27,

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
      top: 37,
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

  botaoONGsignup: {
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

    text3: {
      color:"red",
      fontSize: 20,
        fontWeight:"normal",
        textAlign: `left`,
        
   },

   botaoONGlogin: {
    paddingHorizontal: 10,
    borderRadius: 40,
    backgroundColor: "#8D6E4A",
    alignItems: "center",
      height: 50,
      width: '100%',
      justifyContent:"center",
      elevation: 3,
      top: 30,
},

botaoONGCad: {
  paddingHorizontal: 10,
  borderRadius: 40,
  alignItems: "center",
    height: 50,
    width: '100%',
    justifyContent:"center",
    top: 37,
    right: 0.5,
},

backButton: {
  position: 'absolute',
  top: 20,
  left: 20,
},

CNPJ: {
  height: 50,
  borderColor: 'gray',
  borderWidth: 1,
  width: '100%', // Ajuste a largura conforme necessário
  paddingHorizontal: 10,
  borderRadius: 10,
  fontSize: 20,
  },

  topo:{
    backgroundColor: '#B8860B',
    height: 100,
    width: '100%',
    flexDirection: "row",
    //position: 'absolute',
  },
  roundButton: {
    position: 'absolute',       // Posiciona o botão no canto superior esquerdo
    top: 40,
    left: 10,
  },
  pesquisabtn:{
    //paddingVertical: 0,
    paddingHorizontal: 34,
    marginLeft:-15,
    marginTop:40,
    marginBottom:25,
    width: '60%',
    borderWidth: 1,          // Define a largura da borda
    borderColor: '#007BFF',  // Cor da borda
    borderRadius: 8,         // Borda arredondada
    backgroundColor: '#fff', // Cor de fundo do botão
    },
  btnpesqui:{
    marginLeft:65,
    width:10,
    marginTop:45,
  },
  user:{
    marginLeft:15,
    marginTop:25,
   width:60,
   height:60,
   alignItems: "center",
    borderWidth:1,  
    borderRadius:1000,
    justifyContent: "center",
    backgroundColor: '#A9A9A9',
  },
  containerini:{
    flex: 1,
    backgroundColor: "#f0f4f8",
  },  

});
