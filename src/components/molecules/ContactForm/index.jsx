import classes from "./ContactForm.module.css";
import Input from "@/components/atoms/Input/Input";
import TextArea from "@/components/atoms/TextArea/TextArea";
import Button from "@/components/atoms/Button";
import Parser from "html-react-parser";

export default function ContactForm({ data }) {
  return (
    <div className={classes.contactForm}>
      <div className={classes.title}>{Parser(data?.htmlDescription)}</div>
      <div className={classes.contactFormDescription}>
        <p className={classes.description}>{data?.description}</p>
      </div>
      <div className={classes.inputBox}>
        <div className={classes.inputContainer}>
          <Input
            label="Name"
            placeholder="Enter your name"
            inputClass={classes.inputClassName}
            containerClass={classes.inputContainer}
            className={classes.inputClass}
          />
        </div>
        <div className={classes.inputContainer}>
          <Input
            label="Last name"
            placeholder="Enter your last name"
            inputClass={classes.inputClassName}
            containerClass={classes.inputContainer}
            className={classes.inputClass}
          />
        </div>
      </div>
      <div className={classes.inputContainer}>
        <Input
          label="Email"
          placeholder="Enter your email"
          inputClass={classes.inputClassName}
        />
      </div>
      <div className={classes.inputContainer}>
        <TextArea label="Message" placeholder="Enter your message" inputClass={classes.inputClassName} containerClass={classes.inputContainer} className={classes.inputClass} />
      </div>
      <div>
        <Button label="Send Now" variant="primary" />
      </div>
    </div>
  );
}
