import React from 'react';
import logo from './logo.svg';
import {
  Grid,
  Button
} from "@material-ui/core";
import {
  withStyles
} from "@material-ui/core/styles";
import style from "./style";
import SectionImage from "./assets/images/logo.png";
import FB from "./assets/images/fb.png";
import Twitter from "./assets/images/twitter.png";

function App(props) {
  const {
    classes
  } = props;

  const Links1 = [{
    link:"#", title:"About"
  },{
    link:"#", title:"Link2"
  },{
    link:"#", title:"Link3"
  },{
    link:"#", title:"Link4"
  }]
  const Links2 = [{
    link:"#", title:"About"
  },{
    link:"#", title:"Link2"
  },{
    link:"#", title:"Link3"
  },{
    link:"#", title:"Link4"
  }]

  return (
    <Grid container>
      <Grid item xs={12} md={12} sm={12} lg={12}>
        <Grid item xs={12} md={12} sm={12} lg={12}>
        <div className={classes.headerImage}>
           <div className={classes.siteTitle}>Team Play (खेल मंडल)</div>
           <Button className={classes.loginBtn} variant="contained" color="primary">
        LOG IN
      </Button>
            <div className={classes.headerImageTitle}>
            Lorem Ipsum 
            </div>
            <div className={classes.headerImageSubTitle}>
            Lorem Ipsum is simply dummy text of the printing 
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={12} sm={12} lg={12}
        className={classes.section}
        >
          <Grid className={classes.sectionHeading} item xs={12} md={12} sm={12} lg={12}>
          Lorem Ipsum is simply dummy text of the printing 
          </Grid>
          <Grid container className={classes.sectionSubContainer} item xs={12} md={12} sm={12} lg={12}>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <img src={SectionImage} className={classes.sectionImage} alt="Section Image" />
              <h4>Heading</h4>
              <p className={classes.sectionDetails}>Lorem Ipsum is simply dummy text of the printing.</p>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
            <img src={SectionImage} className={classes.sectionImage} alt="Section Image" />
              <h4>Heading</h4>
              <p className={classes.sectionDetails}>Lorem Ipsum is simply dummy text of the printing.</p>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
            <img src={SectionImage} className={classes.sectionImage} alt="Section Image" />
              <h4>Heading</h4>
              <p className={classes.sectionDetails}>Lorem Ipsum is simply dummy text of the printing.</p>
          </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} sm={12} lg={12}
        className={classes.section2}
        >
          <Grid container className={classes.sectionSubContainer} item xs={12} md={12} sm={12} lg={12}>
            <Grid item xs={12} sm={12} md={12} lg={12}
            className={classes.sectionLeftImageContainer}
            >
              <img src={SectionImage} className={classes.sectionImage} alt="Section Image" />
              <p className={classes.sectionLeftImageDetails}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}
            className={classes.sectionRightImageContainer}
            >
              <img src={SectionImage} className={classes.sectionImage} alt="Section Image" />
              <p className={classes.sectionLeftImageDetails}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12} md={12} sm={12} lg={12}
        className={classes.footerContainer}
        >
          <Grid
          className={classes.footerSubContainer}
          item xs={12} md={8} sm={8} lg={8}>
<div className={classes.footerLinksContainer}>
<ul className={classes.footerLinks}>
  {
    Links1.map(link => <li key={link.title}>
      <a className={classes.footerLink} href={link.link}>{link.title}</a>
    </li>)
  }
</ul>
<ul className={classes.footerLinks}>
  {
     Links2.map(link => <li key={link.title}>
      <a className={classes.footerLink}  href={link.link}>{link.title}</a>
    </li>)
  }
</ul>
</div>
<div className={classes.social}>
  <img src={FB} className={classes.socialIcon} />
  <img src={Twitter}  className={classes.socialIcon}  />
</div>


<footer className={classes.footer}>&copy;{new Date().getFullYear()} Team Play (खेल मंडल)</footer>
          </Grid>
         
          </Grid>
      </Grid>
      </Grid>
  );
}

export default withStyles(style, {useTheme: true})(App);
