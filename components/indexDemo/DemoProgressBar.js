import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import NewAnswerDialog from '/components/NewAnswerDialog';
import NewQuestionDialog from '/components/NewQuestionDialog';
import Send from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import DomainSearch from "./DomainSearch"
import { List, ListItem } from '@mui/material';
import { Stack } from '@mui/material';
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
          <Tab style={{color:"white"}} label="Trustworthiness" {...a11yProps(0)} />
          <Tab style={{color:"white"}} label="Security" {...a11yProps(1)} />
          <Tab style={{color:"white"}} label="Domain Reviews" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>

      <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: '#353C42', borderRadius: 2}}>
      <Typography sx={{mb:2}} variant="body1" style={{color:"white"}}>What it means for a source to be credible/reliable can vary depending on the context of its use. Generally, a credible or reliable source is one that experts in your subject domain would agree is valid for your purposes. This can vary, so it is best to use one of the source evaluation methods that best fits your needs. Do remember that credibility is contextual!</Typography>
      <Typography sx={{mb:2}} variant="body1" style={{color:"white"}}>It is important to critically evaluate sources because using credible/reliable sources makes you a more informed writer. Think about unreliable sources as pollutants to your credibility, if you include unreliable sources in your work, your work could lose credibility as a resul</Typography>
      <Typography sx={{mb:2}} variant="body1" style={{color:"white"}}>There are certain frameworks that information professionals have put together to help people think critically about the information provided. </Typography>
      </Container>

<Stack sx={{mt:{md:10, xs:5}}} direction="column" justifyContent="center" alignItems={{md:'flex-start', xs:'center'}}>
     <Typography sx={{ml:{md:20}}}  variant="h3"><a style={{color:"white", textDecoration: 'underline',textDecorationColor:'#52D17B',textUnderlineOffset:"7px"}} href="http://guides.lib.uw.edu/research/evaluate/5ws">5 W Questions (5Ws):</a></Typography>
      <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: '#353C42', borderRadius: 2}}>
      <Typography style={{color:"white"}} variant="body1"> This method means thinking critically about each of your sources by answering five questions to determine if the source is credible/reliable. The acceptable answers to these questions will vary depending on your needs. The questions are: </Typography>
      <List sx={{ listStyleType: 'disc', ml: 4, mb: 2 }}>
        <ListItem style={{color:"#F8FFF8"}} sx={{ display: 'list-item' }}>Who is the author? (Authority)</ListItem>
        <ListItem style={{color:"white"}} sx={{ display: 'list-item' }}>What is the purpose of the content? (Accuracy)</ListItem>
        <ListItem style={{color:"white"}} sx={{ display: 'list-item' }}>Where is the content from? (Publisher)</ListItem>
        <ListItem style={{color:"white"}} sx={{ display: 'list-item' }}>Why does the source exist? (Purpose and Objectivity)</ListItem>
        <ListItem style={{color:"white"}} sx={{ display: 'list-item' }}>How does this source compare to others? (Determining What's What)</ListItem>
      </List>
      </Container>
</Stack>

<Stack sx={{mt:{md:10, xs:5}}} direction="column" justifyContent="center" alignItems={{md:'flex-start', xs:'center'}}>
  <Typography sx={{ml:{md:20}}} variant="h3"><a style={{color: "white", textDecoration: 'underline',textDecorationColor:'#52D17B',textUnderlineOffset:"7px"}} href="http://guides.lib.uw.edu/research/evaluate/smart">SMART Check:</a></Typography>
<Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: '#353C42', borderRadius: 2}}>
      <Typography style={{color:"white"}} variant="body1"> This method is particularly good at evaluating newspaper sources. Like the 5Ws method it also involves answering critical questions about your source. The criteria are:</Typography>
      <List sx={{ listStyleType: 'disc', ml: 4, mb: 2 }}>
        <ListItem style={{color:"white"}} sx={{ display: 'list-item' }}>Source: Who or what is the source?</ListItem>
        <ListItem style={{color:"white"}} sx={{ display: 'list-item' }}>Motive: Why do they say what they do?</ListItem>
        <ListItem style={{color:"white"}} sx={{ display: 'list-item' }}>Authority: Who wrote the story?</ListItem>
        <ListItem style={{color:"white"}} sx={{ display: 'list-item' }}>Review: Is there anything included that jumps out as potentially untrue?</ListItem>
        <ListItem style={{color:"white"}} sx={{ display: 'list-item' }}>Two-Source Test: How does it compare to another source?</ListItem>
      </List>
      </Container>
</Stack>


<Stack sx={{mt:{md:10, xs:5}}} direction="column" justifyContent="center" alignItems={{md:'flex-start', xs:'center'}}>
<Typography sx={{ml:{md:20}}} variant="h3"><a style={{color: "white", textDecoration: 'underline',textDecorationColor:'#52D17B',textUnderlineOffset:"7px"}} href="http://guides.lib.uw.edu/research/evaluate/craap">CRAAP Test:</a></Typography>
<Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: '#353C42', borderRadius: 2}}>
      <Typography style={{color:"white"}} variant="body1"> This method provides you with a set of criteria that make a source more or less credible. The criteria are:</Typography>
      <List sx={{ listStyleType: 'disc', ml: 4, mb: 4 }}>
        <ListItem style={{color:"white"}} sx={{ display: 'list-item' }}>Currency: Timeliness of the information</ListItem>
        <ListItem style={{color:"white"}} sx={{ display: 'list-item' }}>Relevance: Importance of the information for your needs</ListItem>
        <ListItem style={{color:"white"}} sx={{ display: 'list-item' }}>Authority: Source of the information</ListItem>
        <ListItem style={{color:"white"}} sx={{ display: 'list-item' }}>Accuracy: Truthfulness and correctness of the information</ListItem>
        <ListItem style={{color:"white"}} sx={{ display: 'list-item' }}>Purpose: Reason the information exists</ListItem>
      </List>
      </Container>
</Stack>

    <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{mr:{md:25}, mt:{md:5}}}>
      <Typography sx={{mb:2, color:'white'}} variant="body1">Source: <a style={{color: "#42a862", textDecoration: "none"}} href="https://guides.lib.uw.edu/research/faq/reliable">University of Washington</a></Typography>
    </Stack>

    <Stack direction="column" alignItems="center" justifyContent="center" spacing={2}>
      <Typography style={{color:"white"}} variant="h6">Need more help?</Typography> 
      <Typography style={{color:"white"}} variant="h6">Contact our
      <Button sx={{ml:{xs:0, sm:2}}} href="q&a/private/" variant="contained" color="green">
        Specialists
      </Button></Typography> 
      </Stack>
      </TabPanel>


      <TabPanel value={value} index={1}>
        <Typography sx={{mb:4}} variant="h4">10 steps to follow for determining the safety of a website:</Typography>

        <Typography variant="h6">1. Check the SSL certificate</Typography>
        <Typography sx={{mb:2}} variant="body1">If you only see HTTP within a URL, you should know that the website is not encrypted, meaning your activity could be visible to online predators. Essentially, HTTPS is a security feature provided by an SSL certificate, which is the part of a URL that encrypts a website. This adds a layer of defense against malicious cybercriminals and protects the site's information as it travels from server to server.</Typography>

        <Typography variant="h6">2. Double-check the domain</Typography>
        <Typography sx={{mb:2}} variant="body1">Oftentimes, a cybercriminal will create a malicious website and URL that mimics another high-traffic website to trick users into logging in or making a purchase. This could grant the attacker access to private credentials and billing information that they can then use for credential stuffing. They could also decide to sell your info on the dark web to make a profit.</Typography>

        <Typography variant="h6">3. Search for a privacy policy </Typography>
        <Typography sx={{mb:2}} variant="body1">The privacy policy outlines for users how the trusted website’s company collects, uses, and protects their data. You'll find that most secure sites have one, since countries such as the U.S., Canada, and Australia sometimes require them by law. </Typography>

        <Typography variant="h6">4. Analyze the website design</Typography>
        <Typography sx={{mb:2}} variant="body1">Cybercriminals often throw together unsecure websites in a short amount of time, ignoring attractive design elements that more popular pages incorporate. Spelling errors and grammar mistakes will likely appear throughout the site as well. </Typography>

        <Typography variant="h6">5. Verify ownership  </Typography>
        <Typography sx={{mb:2}} variant="body1">Verifying the owner of a website is great for those learning how to check if a website is secure and it's actually much simpler than many might expect. With the help of Whois Lookup, you can find the name of the registered individual or legal entity that owns the website you're trying to visit. </Typography>

        <Typography variant="h6">6. Find contact information </Typography>
        <Typography sx={{mb:2}} variant="body1">For some, the presence of contact information can make them feel more comfortable with the website they're on. Recent studies have shown that 44% of website visitors will leave a website if there is no contact information provided. Though this information won’t protect you from dangerous websites, it shows you there is someone to reach out to if you run into security concerns. </Typography>

        <Typography variant="h6">7. Identify (and question) trust seals </Typography>
        <Typography sx={{mb:2}} variant="body1">One of the best indicators for those trying to learn how to know if a website is safe is a trust seal. Trust seals are icons with the words “Secure” or “Verified” located beside a URL at the top of the webpage. It’s not enough, however, to just see a trust seal. Nowadays, attackers have found ways to mimic legitimate seals to trick users. Luckily, confirming authentic trust seals is pretty simple — just click on the badge to see if it takes you to a verification page. This confirms that the site is working with a security partner in charge of protecting the data shared and stored on the trusted website. </Typography>

        <Typography variant="h6">8. Look for reviews  </Typography>
        <Typography sx={{mb:2}} variant="body1">If you're interested in buying from a company you've never dealt with before, it's best to do a little research. Google the company's name and look into other customer experiences. This form of social proof can help distinguish legitimate businesses from potential scams. </Typography>

        <Typography variant="h6">9. Consider cybersecurity tools</Typography>
        <Typography sx={{mb:2}} variant="body1">Sure, downloading antivirus software is great for people unsure of how to know if a website is safe or not. But the tools don't stop there. A VPN provides a secure and encrypted internet connection for users browsing online. If you’re wondering how to check if a website is safe before entering, there are also website safety checkers you can install that scan and flag suspicious URLs to help identify potentially dangerous websites.</Typography>

        <Typography variant="h6">10. Know the signs of unsecure websites </Typography>
        <List sx={{ listStyleType: 'disc', ml: 4, mb: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>Search engine warnings</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Spam</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Redirects</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Pop-ups</ListItem>
        </List>

        <Typography sx={{mb:2}} variant="body1">Sources: <a style={{color: "#42a862", textDecoration: "none"}} href="https://us.norton.com/internetsecurity-how-to-how-to-know-if-a-website-is-safe.html">us.norton.com</a>, <a style={{color: "#42a862", textDecoration: "none"}} href="https://www.avg.com/en/signal/website-safety">avg.com</a></Typography>

      </TabPanel>

      <TabPanel value={value} index={2}>
      <Container maxWidth="xs" sx={{mt: 2, px:2, py:3, bgcolor: 'white', borderRadius: 2}}>
        <DomainSearch></DomainSearch>
        </Container>
      </TabPanel>
    </Box>
  );
}