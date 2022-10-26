import React from "react";
import Button from "../../ui/Button/Button";
import styles from "./Main.module.sass";
import cx from "class-names";

const { main, wrapper, title, text } = styles;
const mainClass = cx(main, "section");

export default function Main() {
  return (
    <section className={mainClass}>
      <div className={wrapper}>
        <h1 className={title}>Test assignment for front-end developer</h1>
        <p className={text}>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <Button href="#signup">Sign up</Button>
      </div>
    </section>
  );
}
