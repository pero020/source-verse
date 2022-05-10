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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit velit ut urna fermentum ultrices. 
      Fusce in nibh euismod, fringilla sapien et, faucibus mi. Praesent ornare, lacus vel ullamcorper elementum, diam est pellentesque ligula, ut accumsan purus tellus vel tellus. 
      Nullam arcu urna, imperdiet vel porta sed, consequat semper sem. Proin efficitur sem erat, sit amet faucibus turpis placerat eu. Aenean dignissim mi nec arcu varius dictum. 
      Phasellus viverra turpis eros, et faucibus dolor porta a.
     Duis lacinia neque eget ante vehicula euismod. 
     Sed fringilla sodales nisi sit amet consequat. 
     Vivamus sollicitudin lacus ac lacus faucibus, ut dapibus mauris fermentum. 
     Donec id ligula eget sapien sollicitudin vestibulum. 
     Maecenas lacus odio, malesuada eu laoreet ac, porta laoreet enim. 
     Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
     Cras eu dapibus quam. Praesent non orci vel enim sollicitudin vehicula. Vivamus accumsan convallis luctus. 
     Vestibulum sollicitudin nulla vel nibh tincidunt hendrerit. Donec rhoncus, metus vitae placerat convallis, tortor augue dictum ipsum, id sollicitudin ex lectus eget neque. 
     Integer sagittis felis ex, lobortis facilisis justo mollis vitae. Sed et justo sit amet est vestibulum convallis et et est.
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
