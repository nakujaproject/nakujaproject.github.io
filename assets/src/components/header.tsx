import React from "react";
import { Helmet } from 'react-helmet';

const Header = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Nakuja Project - Rocket development in Kenya</title>
        <link rel="shortcut icon" href="./image/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
        <link rel="stylesheet" href="./css/bulma.min.css" />
        <link rel="stylesheet" href="./css/bulma-steps.min.css" />
        <link rel="stylesheet" href="./css/bulma-timeline.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/bulma-modal-fx/dist/css/modal-fx.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js"></script>
        <script src="js/main.js"></script>
        <script src="js/bulma-steps.min.js"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1BMW6VHETF"></script>
        <script src="./js/ga4.js"></script>
      </Helmet>
    </div>
  );
};

export default Header;
