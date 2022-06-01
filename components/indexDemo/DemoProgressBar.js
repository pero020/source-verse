import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import DomainSearch from "./DomainSearch"
import { List, ListItem } from '@mui/material';
import { Stack } from '@mui/material';
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
        <Tabs indicatorColor="secondary" value={value} onChange={handleChange} centered aria-label="basic tabs example">
          <Tab style={{color:"white"}} label="Trustworthiness" {...a11yProps(0)} />
          <Tab style={{color:"white"}} label="Security" {...a11yProps(1)} />
          <Tab style={{color:"white"}} label="Domain Reviews" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Container maxWidth="xl">
      

<Stack sx={{mt:{md:10, xs:5}}} direction="column" justifyContent="center" alignItems='flex-start'>
     <Typography variant="h4"><a style={{color:"white", textDecoration: 'underline',textDecorationColor:'#52D17B',textUnderlineOffset:"7px"}} href="http://guides.lib.uw.edu/research/evaluate/5ws">5 W Questions (5Ws):</a></Typography>
      <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: "background.paper", borderRadius: 2}}>
      <Typography style={{color:"white"}} variant="body1">Think critically about each of your sources by answering 5 questions to determine source’s credibility.</Typography>
      <List sx={{ listStyleType: 'disc', ml: 4, mb: 2 }}>
        <ListItem style={{color:"#F8FFF8"}} sx={{ display: 'list-item' }}><Typography display="inline" variant="body1" style={{color:'#52D17B'}}>Who</Typography> is the author? (<Typography display="inline" variant="body1" style={{color:'#EC8415'}}>Authority</Typography>)</ListItem>
        <ListItem style={{color:"#F8FFF8"}} sx={{ display: 'list-item' }}><Typography display="inline" variant="body1" style={{color:'#52D17B'}}>What</Typography> is the purpose of the content? (<Typography display="inline" variant="body1" style={{color:'#EC8415'}}>Accuracy</Typography>)</ListItem>
        <ListItem style={{color:"#F8FFF8"}} sx={{ display: 'list-item' }}><Typography display="inline" variant="body1" style={{color:'#52D17B'}}>Where</Typography> is the content from? (<Typography display="inline" variant="body1" style={{color:'#EC8415'}}>Publisher</Typography>)</ListItem>
        <ListItem style={{color:"#F8FFF8"}} sx={{ display: 'list-item' }}><Typography display="inline" variant="body1" style={{color:'#52D17B'}}>Why</Typography> does the source exist? (<Typography display="inline" variant="body1" style={{color:'#EC8415'}}>Purpose</Typography> & <Typography display="inline" variant="body1" style={{color:'#EC8415'}}>Objectivity</Typography>)</ListItem>
        <ListItem style={{color:"#F8FFF8"}} sx={{ display: 'list-item' }}><Typography display="inline" variant="body1" style={{color:'#52D17B'}}>How</Typography> does this source compare to others? (<Typography display="inline" variant="body1" style={{color:'#EC8415'}}>Determining What's What</Typography>)</ListItem>
      </List>
      </Container>
</Stack>

<Stack sx={{mt:{md:10, xs:5}}} direction="column" justifyContent="center" alignItems='flex-start'>
  <Typography variant="h4"><a style={{color: "white", textDecoration: 'underline',textDecorationColor:'#52D17B',textUnderlineOffset:"7px"}} href="http://guides.lib.uw.edu/research/evaluate/smart">SMART Check:</a></Typography>
<Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: "background.paper", borderRadius: 2}}>
      <Typography style={{color:"white"}} variant="body1"> This method is particularly good at evaluating newspaper sources.</Typography>
      <List sx={{ listStyleType: 'disc', ml: 4, mb: 2 }}>
        <ListItem style={{color:"white"}} sx={{ display: 'list-item' }}><Typography display="inline" variant="body1" style={{color:'#52D17B'}}>Source</Typography>: Who or what is the source?</ListItem>
        <ListItem style={{color:"white"}} sx={{ display: 'list-item' }}><Typography display="inline" variant="body1" style={{color:'#52D17B'}}>Motive</Typography>: Why do they say what they do?</ListItem>
        <ListItem style={{color:"white"}} sx={{ display: 'list-item' }}><Typography display="inline" variant="body1" style={{color:'#52D17B'}}>Authority</Typography>: Who wrote the story?</ListItem>
        <ListItem style={{color:"white"}} sx={{ display: 'list-item' }}><Typography display="inline" variant="body1" style={{color:'#52D17B'}}>Review</Typography>: Is there anything included that jumps out as potentially untrue?</ListItem>
        <ListItem style={{color:"white"}} sx={{ display: 'list-item' }}><Typography display="inline" variant="body1" style={{color:'#52D17B'}}>Two-Source Test</Typography>: How does it compare to another source?</ListItem>
      </List>
      </Container>
</Stack>


<Stack sx={{mt:{md:10, xs:5}}} direction="column" justifyContent="center" alignItems='flex-start'>
<Typography variant="h4"><a style={{color: "white", textDecoration: 'underline',textDecorationColor:'#52D17B',textUnderlineOffset:"7px"}} href="http://guides.lib.uw.edu/research/evaluate/craap">CRAAP Test:</a></Typography>
<Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: "background.paper", borderRadius: 2}}>
      <Typography style={{color:"white"}} variant="body1"> This method provides you with a set of criteria that make a source more or less credible. The criteria are:</Typography>
      <List sx={{ listStyleType: 'disc', ml: 4, mb: 4 }}>
        <ListItem style={{color:"white"}} sx={{ display: 'list-item' }}><Typography display="inline" variant="body1" style={{color:'#52D17B'}}>Currency</Typography>: Timeliness of the information</ListItem>
        <ListItem style={{color:"white"}} sx={{ display: 'list-item' }}><Typography display="inline" variant="body1" style={{color:'#52D17B'}}>Relevance</Typography>: Importance of the information for your needs</ListItem>
        <ListItem style={{color:"white"}} sx={{ display: 'list-item' }}><Typography display="inline" variant="body1" style={{color:'#52D17B'}}>Authority</Typography>: Source of the information</ListItem>
        <ListItem style={{color:"white"}} sx={{ display: 'list-item' }}><Typography display="inline" variant="body1" style={{color:'#52D17B'}}>Accuracy</Typography>: Truthfulness and correctness of the information</ListItem>
        <ListItem style={{color:"white"}} sx={{ display: 'list-item' }}><Typography display="inline" variant="body1" style={{color:'#52D17B'}}>Purpose</Typography>: Reason the information exists</ListItem>
      </List>
      </Container>
</Stack>

    <Stack direction="row" alignItems="center" justifyContent={{xs:"flex-start", md:"flex-end"}} sx={{mt:2}}>
      <Typography sx={{mb:2, color:'white'}} variant="body1">Source: <a style={{color: "#42a862", textDecoration: "none"}} href="https://guides.lib.uw.edu/research/faq/reliable">University of Washington</a></Typography>
    </Stack>

    <Stack direction="column" alignItems="center" justifyContent="center" spacing={2} sx={{mt:5}}>
      <Typography style={{color:"white"}} variant="h6">Need more help?</Typography> 
      <Typography style={{color:"white"}} variant="h6">Contact our
      <Button sx={{ml: 2}} href="q&a/private/" variant="contained" color="green">
        Specialists
      </Button></Typography> 
      </Stack>
      </Container>
      </TabPanel>


      <TabPanel value={value} index={1}>
 <Container maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent={{xs: "center", md: "flex-start"}}>
        <Typography sx={{mb:8, mt: 2,color:'background.contrastColor', textDecoration:'underline', textDecorationColor:"#52d17b", display:'inline'}} variant="h3">10 safety steps to follow:</Typography>
      </Stack>

      <Stack direction="column" alignItems="center" justifyContent="center" spacing={5}>
        <Box>
        <Typography variant="h6" sx={{mb:4,color:'background.contrastColor', display:'inline', textDecoration:'underline', textDecorationColor:"#52d17b", display:'inline'}}>1. Check the SSL certificate</Typography>
        <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: "background.paper", borderRadius: 2}}>
        <Typography sx={{mb:2}} variant="body1" style={{color:"white"}}>If you only see <Typography display="inline" variant="body1" style={{color:'#52D17B'}}>HTTP</Typography> within a URL, you should know that the website is <Typography display="inline" variant="body1" style={{color:'#52D17B'}}>not encrypted</Typography>, meaning your activity could be visible to online predators. Essentially, HTTPS is a security feature provided by an <Typography display="inline" variant="body1" style={{color:'#52D17B'}}>SSL</Typography> certificate, which is the part of a URL that encrypts a website.</Typography>
        </Container>
        </Box>

        <Box>
        <Typography variant="h6" sx={{mb:4,color:'background.contrastColor', display:'inline', textDecoration:'underline', textDecorationColor:"#52d17b", display:'inline'}}>2. Double-check the domain</Typography>
        <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: "background.paper", borderRadius: 2}}>
        <Typography sx={{mb:2}} variant="body1" style={{color:"white"}}>Cybercriminals <Typography display="inline" variant="body1" style={{color:'#52D17B'}}>malicious websites</Typography> websites that mimic another high-traffic website to trick users into logging in or making a purchase. This could grant the attacker access to <Typography display="inline" variant="body1" style={{color:'#52D17B'}}>private credentials</Typography> and billing information. </Typography>
        </Container>
        </Box>

        <Box>
        <Typography variant="h6" sx={{mb:4,color:'background.contrastColor', display:'inline', textDecoration:'underline', textDecorationColor:"#52d17b", display:'inline'}}>3. Search for a privacy policy </Typography>
        <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: "background.paper", borderRadius: 2}}>
        <Typography style={{color:"white"}} sx={{mb:2}} variant="body1">The privacy policy outlines how the trusted website’s company collects, uses, and <Typography display="inline" variant="body1" style={{color:'#52D17B'}}>protects their data</Typography>. You'll find that most secure sites have one, since countries such as the U.S., Canada, and Australia require them by law.</Typography>
        </Container>
        </Box>

        <Box>
        <Typography variant="h6" sx={{mb:4,color:'background.contrastColor', display:'inline',textDecoration:'underline', textDecorationColor:"#52d17b", display:'inline'}}>4. Analyze the website design</Typography>
        <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: "background.paper", borderRadius: 2}}>
        <Typography style={{color:"white"}} sx={{mb:2}} variant="body1">Cybercriminals make <Typography display="inline" variant="body1" style={{color:'#52D17B'}}>unsecure websites</Typography> in a short amount of time, ignoring attractive design elements that more popular pages incorporate. <Typography display="inline" variant="body1" style={{color:'#52D17B'}}>Spelling errors</Typography> and <Typography display="inline" variant="body1" style={{color:'#52D17B'}}>grammar mistakes</Typography> will likely appear throughout the site as well. </Typography>
        </Container>
        </Box>

        <Box>
        <Typography variant="h6" sx={{mb:4,color:'background.contrastColor', display:'inline',textDecoration:'underline', textDecorationColor:"#52d17b", display:'inline'}}>5. Verify ownership  </Typography>
        <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: "background.paper", borderRadius: 2}}>
        <Typography style={{color:"white"}} sx={{mb:2}} variant="body1"><Typography display="inline" variant="body1" style={{color:'#52D17B'}}>Verifying the owner</Typography> of a website is great for those learning how to check if a website is secure and it's actually much simpler than many might expect. With the help of <Typography display="inline" variant="body1" style={{color:'#52D17B'}}>Whois Lookup</Typography>, you can find the name of the registered individual or legal entity that owns the website you're trying to visit. </Typography>
        </Container>
        </Box>

        <Box>
        <Typography variant="h6" sx={{mb:4,color:'background.contrastColor', display:'inline',textDecoration:'underline', textDecorationColor:"#52d17b", display:'inline'}}>6. Find contact information </Typography>
        <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: "background.paper", borderRadius: 2}}>
        <Typography style={{color:"white"}} sx={{mb:2}} variant="body1">For some, the <Typography display="inline" variant="body1" style={{color:'#52D17B'}}>presence of contact information</Typography> can make them feel more comfortable with the website they're on. Recent studies have shown that <Typography display="inline" variant="body1" style={{color:'#52D17B'}}>44%</Typography> of website visitors will leave a website if there is <Typography display="inline" variant="body1" style={{color:'#52D17B'}}>no contact information</Typography> provided.</Typography>
        </Container>
        </Box>

        <Box>
        <Typography variant="h6" sx={{mb:4,color:'background.contrastColor', display:'inline',textDecoration:'underline', textDecorationColor:"#52d17b", display:'inline'}}>7. Identify (and question) trust seals </Typography>
        <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: "background.paper", borderRadius: 2}}>
        <Typography style={{color:"white"}} sx={{mb:2}} variant="body1">One of the best indicators for those trying to learn how to know if a website is safe is a <Typography display="inline" variant="body1" style={{color:'#52D17B'}}>trust seal</Typography>. Trust seals are icons with the words <Typography display="inline" variant="body1" style={{color:'#52D17B'}}>Secure</Typography>” or <Typography display="inline" variant="body1" style={{color:'#52D17B'}}>Verified</Typography>” located beside a URL at the top of the webpage. It’s not enough, however, to just see a trust seal. Nowadays, attackers have found ways to mimic legitimate seals to trick users. Luckily, confirming authentic trust seals is pretty simple — just click on the badge to see if it takes you to a verification page. This confirms that the site is working with a security partner in charge of protecting the data shared and stored on the trusted website. </Typography>
        </Container>
        </Box>

        <Box>
        <Typography variant="h6" sx={{mb:4,color:'background.contrastColor', display:'inline',textDecoration:'underline', textDecorationColor:"#52d17b", display:'inline'}}>8. Look for reviews  </Typography>
        <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: "background.paper", borderRadius: 2}}>
        <Typography style={{color:"white"}} sx={{mb:2}} variant="body1">If you're interested in buying from a company you've never dealt with before, it's best to do a little research. Google the company's name and look into other <Typography display="inline" variant="body1" style={{color:'#52D17B'}}>customer experiences</Typography>. This form of social proof can help distinguish legitimate businesses from potential scams.</Typography>
        </Container>
        </Box>

        <Box>
        <Typography variant="h6" sx={{mb:4,color:'background.contrastColor', display:'inline',textDecoration:'underline', textDecorationColor:"#52d17b", display:'inline'}}>9. Consider cybersecurity tools</Typography>
        <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: "background.paper", borderRadius: 2}}>
        <Typography style={{color:"white"}} sx={{mb:2}} variant="body1"><Typography display="inline" variant="body1" style={{color:'#52D17B'}}>VPN</Typography> provides a <Typography display="inline" variant="body1" style={{color:'#52D17B'}}>secure</Typography> and <Typography display="inline" variant="body1" style={{color:'#52D17B'}}>encrypted</Typography> internet connection for users browsing online. There are also website <Typography display="inline" variant="body1" style={{color:'#52D17B'}}>safety checkers</Typography> you can install that scan and flag suspicious URLs to help identify potentially dangerous websites.</Typography>
        </Container>
        </Box>
        </Stack>
        <Box sx={{mt:5}}>
          <Typography variant="h6" sx={{mb:4,color:'background.contrastColor', display:'inline'}}>10. Know the signs of unsecure websites </Typography>
            <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: "background.paper", borderRadius: 2}}>
              <List sx={{ listStyleType: 'disc', ml: 4}}>
                <ListItem style={{color:"white"}} sx={{ display: 'list-item' }}>Search engine warnings</ListItem>
                <ListItem style={{color:"white"}} sx={{ display: 'list-item' }}>Spam</ListItem>
                <ListItem style={{color:"white"}} sx={{ display: 'list-item' }}>Redirects</ListItem>
                <ListItem style={{color:"white"}} sx={{ display: 'list-item' }}>Pop-ups</ListItem>
              </List>
          </Container>
          </Box>

        </Container>
        <Stack direction="row" alignItems="center" justifyContent={{xs: "center", md:"flex-end"}} sx={{mt:2, mr:{md:25}}}>
        <Typography style={{color:"white"}} sx={{mb:2}} variant="body1">Sources: <a style={{color: "#42a862", textDecoration: "none"}} href="https://us.norton.com/internetsecurity-how-to-how-to-know-if-a-website-is-safe.html">us.norton.com</a>, <a style={{color: "#42a862", textDecoration: "none"}} href="https://www.avg.com/en/signal/website-safety">avg.com</a></Typography>
        </Stack>
      </TabPanel>

      <TabPanel value={value} index={2}>
    
      <Container maxWidth="md" sx={{mt: 2, px:2, py:3, bgcolor: 'primary.main', borderRadius: 2}}>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Typography variant="h4">Search for a domain that You are interested in.</Typography>
        <DomainSearch></DomainSearch>
        </Stack>
        </Container>
      </TabPanel>
    </Box>
  );
}