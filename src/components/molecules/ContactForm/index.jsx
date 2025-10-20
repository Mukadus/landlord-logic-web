import classes from "./ContactForm.module.css";
import Input from "@/components/atoms/Input/Input";
import TextArea from "@/components/atoms/TextArea/TextArea";
import Button from "@/components/atoms/Button";
import Parser from "html-react-parser";

export default function ContactForm({ data, form }) {
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
            value={form.values.name}
            setValue={(val) => form.setFieldValue("name", val)}
            error={form.touched.name && form.errors.name}
            placeholder="Enter your name"
            inputClass={classes.inputClassName}
            containerClass={classes.inputContainer}
            className={classes.inputClass}
          />
        </div>
        <div className={classes.inputContainer}>
          <Input
            label="Last name"
            value={form.values.lastname}
            setValue={(val) => form.setFieldValue("lastname", val)}
            error={form.touched.lastname && form.errors.lastname}
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
          value={form.values.email}
          setValue={(val) => form.setFieldValue("email", val)}
          error={form.touched.email && form.errors.email}
          placeholder="Enter your email"
          inputClass={classes.inputClassName}
        />
      </div>
      <div className={classes.inputContainer}>
        <TextArea label="Message" placeholder="Enter your message" inputClass={classes.inputClassName} containerClass={classes.inputContainer} className={classes.inputClass} />
      </div>
      <div>
        <Button label="Send Now" variant="primary" onClick={form.handleSubmit} />
      </div>
    </div>
  );
}
