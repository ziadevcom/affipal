import DashboardRow from "../DashboardRow/DashboardRow";
import DashboardTitle from "../DashboardTitle/DashboardTitle";
import Card from "../../General UI/Card/Card";
import CardWrapper from "../../General UI/Card/CardWrapper";
import "./DashboardContent.css";
import SyntaxHighlighter from "../../General UI/SyntaxHighlighter/SyntaxHighlighter";
import Banner from "../../General UI/Banner/Banner";
import { Route, Switch } from "react-router-dom";

// Major Page Parts imports below
import ProductCard from "../Product Card/ProductCard";

const cardCSS = `.amazon-card {
  display: flex;
  padding: 1rem 0;
  width: 90%;
  border-radius: 5px;
  background-color: white;
  position: relative;
  /* overflow: hidden; */
  padding: 1.5rem 1rem;
  min-height: 350px;
  align-items: center;
  max-width: 90%;
}
.amazon-card .image-section {
  min-width: 25%;
  max-width: 25%;
  height: auto;
  text-align: center;
  align-self: flex-start;
}
.amazon-card .image-section img {
  max-width: 150px;
}
.amazon-card .features {
  min-width: 65%;
  max-width: 65%;
  margin-left: 20px;
}
.features a {
  text-decoration: none;
}
.features a {
  font-size: 22px;
  color: var(--primary-color);
  display: block;
  line-height: 1.5;
  font-weight: 700;
  font-family: "Open Sans", "Montserrat";
}
/* .features h1{max-width: 95%;} */

.features ul,
.features ol {
  list-style-position: outside;
  padding-top: 1rem;
  font-size: 14px;
  color: rgb(57, 62, 66);
}
.features ul li,
.features ol li {
  margin-bottom: 8px;
  line-height: 1.4;
}
.features p {
  font-size: 1.3rem;
  text-align: right;
  color: #323232;
}
.card-price {
  padding-top: 12px;
}
.features p img {
  max-width: 110px;
}
/* Star Rating */
.star-rating {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 12px;
  flex-direction: column;
  align-self: flex-end;
}
.star-rating a {
  position: relative;
  display: inline-block;
  background-image: url(../../images/svg/star.svg);
  background-repeat: repeat-x;
  background-position: left center;
  vertical-align: middle;
  height: 16px;
  width: 80px;
  background-size: 16px 16px;
  text-align: center;
  margin: auto;
}
.star-rating span {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: block;
  background-image: url(../../images/svg/star-yellow.svg);
  background-repeat: repeat-x;
  background-position: left center;
  height: 16px;
  width: 80px;
  background-size: 16px 16px;
}
.amazon-card .tax {
  position: absolute;
  bottom: 15px;
  left: 25px;
  color: var(--black-color);
  font-size: 12px;
}
.card-badge {
  position: absolute;
  top: -18px;
  left: -10px;
  display: inline-block;
  background-color: var(--primary-color);
  color: var(--white-color);
  z-index: 500;
  padding: 10px 15px;
  font-size: 1rem;
  line-height: 1rem;
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.14);
  font-weight: bold;
  font-family: "Montserrat";
}
.card-badge::after {
  content: " ";
  display: block;
  position: absolute;
  left: -10px;
  bottom: -7px;
  border-color: transparent var(--primary-color) transparent transparent;
  border-style: inset solid inset inset;
  border-width: 0 10px 7px;
  filter: brightness(50%);
}
@media screen and (max-width: 480px) {
  .image-section {
    display: none;
  }
}`;

function DashboardContent() {
  return (
    <div className="db__body">
      <Switch>
        <Route exact path="/">
          <DashboardTitle text="Home" />
        </Route>
        <Route path="/dashboard">
          <DashboardRow>
            <DashboardTitle text="Dashboard" />
          </DashboardRow>
          <DashboardRow>
            <CardWrapper>
              <Card title="Product Cards" link="/product-cards">
                <img src="/carddemo.svg" alt="card" />
              </Card>
              <Card title="Pros Cons" link="/pro-cons">
                <img src="/procons.svg" alt="pros and cons" />
              </Card>
              <Card title="Pros Cons" link="/pro-cons">
                <img src="/procons.svg" alt="pros and cons" />
              </Card>
              <Card title="Pros Cons" link="/pro-cons">
                <img src="/procons.svg" alt="pros and cons" />
              </Card>
            </CardWrapper>
          </DashboardRow>
          <DashboardRow>
            <CardWrapper perRow="2">
              <Card title="How to use?">
                <p>1. Add the code below to your website's head tag.</p>
                <SyntaxHighlighter code={cardCSS} lang="css" />
                <p>2. or Add this CSS code in Wordpress Custom CSS</p>
                <SyntaxHighlighter
                  code='<link rel="stylesheet" href="https:/affipal.com/css/card.css">'
                  lang="html"
                />
              </Card>
              <Card title="Announcements / Updates">
                <p>
                  This section will keep you updated with latest
                  information/updates about this tool. We will keep you updated
                  with every possible information such as new features.
                </p>
                <ul>
                  <li>
                    <a href="#">Why did we made this tool completely free?</a>
                  </li>
                  <li>
                    <a href="#">Why did we made this tool completely free?</a>
                  </li>
                  <li>
                    <a href="#">Why did we made this tool completely free?</a>
                  </li>
                  <li>
                    <a href="#">Why did we made this tool completely free?</a>
                  </li>
                  <li>
                    <a href="#">Why did we made this tool completely free?</a>
                  </li>
                </ul>
              </Card>
            </CardWrapper>
          </DashboardRow>
          <DashboardRow>
            <Banner text="This tool is completely free and always will be." />
          </DashboardRow>
        </Route>
        <Route path="/product-card">
          <ProductCard />
        </Route>
      </Switch>
    </div>
  );
}
export default DashboardContent;
