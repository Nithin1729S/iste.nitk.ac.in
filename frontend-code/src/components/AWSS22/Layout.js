import React from "react";
import Card from "./Card";
import styles from "./css/Layout.module.css";

class Layout extends React.Component {

  state = {
    items: [
      {
        name: "After Everything, I'm Going Back Home",
        imageLink: "",
        para1:
          "Officer Gabriel Cabalerro had spent four long years serving in the Mexican Army during a period of violent unrest. It was what he had wanted - to help stop the violence caused by the cartels.",
        para2:
          "He had worked tirelessly, following orders - to fight back, to make a difference. If his toil had barely started to bear fruit, then why did he feel so tired already? He had no answer.",
        para3:
          "What he did know, however, was that he missed his family. They were his strength and his hope. And for his efforts and services, he had been permitted to take leave - to see them again, to go back home.",
        para4:
          "This is his journey back home.",
        link: "/awss/mexican"
      },
      {
        name: "The Gods of Egypt",
        imageLink: "",
        para1:
          "A dark power has taken hold of Egypt. People have been living under oppression for five centuries.",
        para2:
          "Those who try to stir rebellion or bring instability are executed in front of all people to set an example. Even most of the Egyptian Gods have cursed the land out of anger. Religious practices have been disregarded completely by the current Pharaoh Amenhotep V.",
        para3:
          "Hope lies in Aisha who, enraged by her father’s murder by the Pharaoh’s servants, vows to take revenge. Her purpose soon evolves into an aim to free the people of Egypt from their dictator. Supported by the Gods Themselves in her Holy quest, she is determined to stop Amenhotep.",
        para4:
          "Will she be able to do it? And will she be supported in a primarily patriarchal society? Join her to find out the outcome of this medieval drama, with the Gods of Egypt on both sides.",
        link: "/awss/egyptian"
      },
      {
        name: "Thicker than Wine",
        imageLink: "",
        para1:
          "Ariadne, princess of Crete and granddaughter of Zeus has always hated her life - everything from her parents to how women were treated in ancient Greece.",
        para2:
          "She recognizes that her one true love - red wine, is the only way out of what she called home. Fueled by the need for revenge, she manipulates princes and even Gods, using her royal blood and cunning tendencies to her advantage. She would not let anyone stand in the way of her and her ultimate goal - to become the only deity associated with red wine.",
        para3:
          "Follow Ariadne as she seeks to take revenge against those who have wronged her.",
        para4: "",
        link: "/awss/greek"
      },
      {
        name: "Reincarnation",
        imageLink: "",
        para1:
          "Life is not always the same that you imagined it to be. Anja, a teenager travels miles to pursue her dreams. In this unknown city, secrets unfold of her past love life. A German with origins of Roman since past six lives.",
        para2:
          "Anja turns out to be one of the most famous personalities in all past lives. She was the one who made their culture famous worldwide and now she is unknown of her inner strength. A goddess of Romans lost her past memories. Her partner is stuck in the book, with whom she spent six wonderful lives. Her man, the Roman God, is in danger.",
        para3:
          "Will she be able to save her love from Diavolo, the devil? Who will be ruling Romans next? A fight between the gods and the devils. Will the goddess save her world?",
        para4:
          "Read out the story to get to know what happened next.",
        link: "/awss/italian"
      }
    ]
  }

  render() {
    return (
      <>
      <div className={styles.container}>
        {this.state.items.map(el => (
          <Card
            name={el.name}
            imageLink={el.imageLink}
            para1={el.para1}
            para2={el.para2}
            para3={el.para3}
            para4={el.para4}
            link={el.link}
          />
      ))}
      </div>

      <br /><br /><br/>
      </>
    );
  }
}

export default Layout;
