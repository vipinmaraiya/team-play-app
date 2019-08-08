import HeaderImage from "./assets/images/header-bg.jpeg";


export default (theme) =>({
    headerImage:{
        backgroundImage: `url(${HeaderImage})`,
        backgroundPosition:"0% 100%",
        backgroundRepeat:"no-repeat",
        backgroundClip:"border-box",
        backgroundAttachment:"fixed",
        backgroundSize:"cover",
        height:600,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center"
    },
    headerImageTitle:{
        color:"#ffffff",
        fontSize:"3rem"
    },
    headerImageSubTitle:{
        color:"#C7CACD",
        fontSize:"1.3rem"
    },
    siteTitle:{
        color:"#ffffff",
        fontSize:"1.5rem",
        position:"absolute",
        top:"5%",
        left:"5%"
    },
    loginBtn:{
        position:"absolute",
        right:"2%",
        top:"5%"
    },
    section:{
        padding:"5rem 0",
        boxSizing:"border-box"
    },
    section2:{
        backgroundColor:"#37536c",
        padding:"5rem 0",
        boxSizing:"border-box"
    },
    sectionLeftImageContainer:{
        display:"flex",
        alignItems:"center",
        [theme.breakpoints.only('xs')]: {
            flexDirection:"column"
          },
    },
    sectionLeftImageDetails:{
        color:"#ffffff",
        textAlign:"justify",
        padding: "0px 5px",
        boxSizing:"border-box",
    },
    sectionRightImageContainer:{
        display:"flex",
        alignItems:"center",
        flexDirection:"row-reverse",
        [theme.breakpoints.only('xs')]: {
            flexDirection:"column"
          },
    },
    sectionHeading:{
        textAlign:"center",
        marginBottom:"3rem",
        fontSize:"1.5rem"
    },
    sectionSubContainer:{
        width:"80%",
        margin:"0 auto",
        textAlign:"center"
    },
    sectionImage:{
        width:"220px"
    },
    sectionDetails:{
        color:"#909ea9"
    },
    footerContainer:{
        backgroundColor:"#373f46",
        height:300
    },
    footerLinksContainer:{
        display:"flex",
        color: "#ffffff",
        [theme.breakpoints.only('xs')]: {
            justifyContent:"center"
          },
    },
    footerLinks:{
        listStyle:"none",
        padding:0,
        marginRight:"8rem",
        [theme.breakpoints.only('xs')]: {
            
            margin:"2rem",
          },
    },
    footerLink:{
        color:"#ffffff",
        fontSize:"0.8rem",
        textDecoration:"none",
        "&:hover":{
            color:"#adb3b9"
        }
    },
    footerSubContainer:{
        width:"90%",
        margin:"0 auto",
        position: "relative",
        paddingTop:"3rem"
    },
    footer:{
        position:"absolute",
        bottom:10,
        width:"100%",
        color:"#ffffff",
        fontSize:"0.8rem",
        [theme.breakpoints.only('xs')]: {
            textAlign:"center"
          },
    },
    social:{
        position:"absolute",
        right:0,
        top:"3rem",
        [theme.breakpoints.only('xs')]: {
            position:"static",
            textAlign:"center"
          },
    },
    socialIcon:{
        width:35,
        height:35,
        marginLeft:10
    }
})