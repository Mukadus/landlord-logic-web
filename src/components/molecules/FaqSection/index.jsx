import * as React from 'react';
import Accordion, { accordionClasses } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails, {
  accordionDetailsClasses,
} from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Fade from '@mui/material/Fade';
import styles from './FaqSection.module.css';

export default function AccordionTransition({data}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = ({data}) => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        className={styles.accordion}
        sx={[
          expanded
            ? {
                [`& .${accordionClasses.region}`]: {
                  height: 'auto',
                },
                [`& .${accordionDetailsClasses.root}`]: {
                  display: 'block',
                },
              }
            : {
                [`& .${accordionClasses.region}`]: {
                  height: 0,
                },
                [`& .${accordionDetailsClasses.root}`]: {
                  display: 'none',
                },
              },
        ]}
      >
        <AccordionSummary
          expandIcon={<ChevronRightIcon className={`${styles.expandIcon} ${expanded ? styles.expanded : ''}`} />}
          aria-controls="panel1-content"
          id="panel1-header"
          className={styles.accordionSummary}
        >
          <Typography component="span" className={styles.questionText}>
            {data?.question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <Typography className={styles.answerText}>
            {data?.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
