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
  padding: 1.5rem 1rem;
  min-height: 350px;
  align-items: center;
  max-width: 90%;
}....`;

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
        <ProductCard />
      </Switch>
    </div>
  );
}
export default DashboardContent;
