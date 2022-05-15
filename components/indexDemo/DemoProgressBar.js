import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import NewAnswerDialog from '/components/NewAnswerDialog';
import NewQuestionDialog from '/components/NewQuestionDialog';
import Send from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import DomainSearch from "./DomainSearch"
import { List, ListItem } from '@mui/material';
import Link from 'next/link'
import Button from '@mui/material/Button';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function DemoProgressBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered aria-label="basic tabs example">
          <Tab label="Trustworthiness" {...a11yProps(0)} />
          <Tab label="Security" {...a11yProps(1)} />
          <Tab label="Domain Reviews" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Typography sx={{mb:2}} variant="body1">What it means for a source to be credible/reliable can vary depending on the context of its use. Generally, a credible or reliable source is one that experts in your subject domain would agree is valid for your purposes. This can vary, so it is best to use one of the source evaluation methods that best fits your needs. Do remember that credibility is contextual!</Typography>
      <Typography sx={{mb:2}} variant="body1">It is important to critically evaluate sources because using credible/reliable sources makes you a more informed writer. Think about unreliable sources as pollutants to your credibility, if you include unreliable sources in your work, your work could lose credibility as a resul</Typography>
      <Typography sx={{mb:2}} variant="body1">There are certain frameworks that information professionals have put together to help people think critically about the information provided. </Typography>

      <Typography variant="body1"><a style={{color: "#42a862", textDecoration: "none"}} href="http://guides.lib.uw.edu/research/evaluate/5ws">5 W Questions (5Ws):</a> This method means thinking critically about each of your sources by answering five questions to determine if the source is credible/reliable. The acceptable answers to these questions will vary depending on your needs. The questions are: </Typography>
      <List sx={{ listStyleType: 'disc', ml: 4, mb: 2 }}>
        <ListItem sx={{ display: 'list-item' }}>Who is the author? (Authority)</ListItem>
        <ListItem sx={{ display: 'list-item' }}>What is the purpose of the content? (Accuracy)</ListItem>
        <ListItem sx={{ display: 'list-item' }}>Where is the content from? (Publisher)</ListItem>
        <ListItem sx={{ display: 'list-item' }}>Why does the source exist? (Purpose and Objectivity)</ListItem>
        <ListItem sx={{ display: 'list-item' }}>How does this source compare to others? (Determining What's What)</ListItem>
      </List>
      <Typography variant="body1"><a style={{color: "#42a862", textDecoration: "none"}} href="http://guides.lib.uw.edu/research/evaluate/smart">SMART Check:</a> This method is particularly good at evaluating newspaper sources. Like the 5Ws method it also involves answering critical questions about your source. The criteria are:</Typography>
      <List sx={{ listStyleType: 'disc', ml: 4, mb: 2 }}>
        <ListItem sx={{ display: 'list-item' }}>Source: Who or what is the source?</ListItem>
        <ListItem sx={{ display: 'list-item' }}>Motive: Why do they say what they do?</ListItem>
        <ListItem sx={{ display: 'list-item' }}>Authority: Who wrote the story?</ListItem>
        <ListItem sx={{ display: 'list-item' }}>Review: Is there anything included that jumps out as potentially untrue?</ListItem>
        <ListItem sx={{ display: 'list-item' }}>Two-Source Test: How does it compare to another source?</ListItem>
      </List>
      <Typography variant="body1"><a style={{color: "#42a862", textDecoration: "none"}} href="http://guides.lib.uw.edu/research/evaluate/craap">CRAAP Test:</a> This method provides you with a set of criteria that make a source more or less credible. The criteria are:</Typography>
      <List sx={{ listStyleType: 'disc', ml: 4, mb: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>Currency: Timeliness of the information</ListItem>
        <ListItem sx={{ display: 'list-item' }}>Relevance: Importance of the information for your needs</ListItem>
        <ListItem sx={{ display: 'list-item' }}>Authority: Source of the information</ListItem>
        <ListItem sx={{ display: 'list-item' }}>Accuracy: Truthfulness and correctness of the information</ListItem>
        <ListItem sx={{ display: 'list-item' }}>Purpose: Reason the information exists</ListItem>
      </List>
      <Typography sx={{mb:2}} variant="body1">Source: <a style={{color: "#42a862", textDecoration: "none"}} href="https://guides.lib.uw.edu/research/faq/reliable">University of Washington</a></Typography>
      <Typography variant="h6">Need more help? Contact our
      <Button sx={{ml:{xs:0, sm:2}}} href="q&a/private/" variant="contained" color="primary">
        Specialists
      </Button></Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        In front of you is a green + button that opens a new "Add a New Question" dialog. 
        Here you can select which category question belongs to, e.g. general, IT, history and much more!
        Then, you need to choose your question title and description. After you are done just click <br/><Send></Send><br/>or if you want to trow it all to trash, click this<br/>
         <DeleteIcon></DeleteIcon><br/><br/><br/><Fab color="secondary"><AddIcon ></AddIcon></Fab>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <DomainSearch></DomainSearch>
      </TabPanel>
    </Box>
  );
}