import { blogPosts } from '../data';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ArrowRight, Globe, Users, Calendar } from 'lucide-react';

const HomePage = () => {
  return (
    <Box sx={{ m: 0, p: 0 }}>
      <Typography variant="h4" component="h1" fontWeight="bold" sx={{ marginLeft: '5%', mt: 0, mb: 2 }}>
        Home
      </Typography>
      
      {/* Quick Actions Section */}
      <Grid container spacing={3} mb={5} justifyContent="left" sx={{marginLeft: '5%'}}>
        <Grid item>
          <Card variant="outlined" sx={{ width: 320 }}>
            <CardContent>
              <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                Get started <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Read our getting started guide to get the most out of your subscription.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card variant="outlined" sx={{ width: 320 }}>
            <CardContent>
              <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                Community <Users size={18} style={{ marginLeft: '8px' }} />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Join the conversation on our exclusive community on Slack.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card variant="outlined" sx={{ width: 320 }}>
            <CardContent>
              <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                Visit website <Globe size={18} style={{ marginLeft: '8px' }} />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Keep up with our latest content on our website.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Latest Posts Section */}
      <Box sx={{ marginLeft: '5%' }}>
        <Typography component="h4" gutterBottom fontWeight="bold" sx={{ color: 'rgba(0,0,0,0.8)' }}>
          Latest Posts
        </Typography>
        <br/>
        <Grid container spacing={3} mb={5} sx={{ marginLeft: '-1.5%' }}>
          {blogPosts.map((post) => (
            <Grid item xs={12} sm={6} key={post.id}>
              <Box sx={{ width: 500, minHeight: 200, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <CardContent>
                  <Typography sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }} color="text.secondary" variant="body2">
                    {post.date}
                  </Typography>
                  <Typography variant="h6" component="div" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {post.excerpt}
                  </Typography>
                  <Typography variant="caption" sx={{ display: 'inline-block', backgroundColor: '#f0f0f0', padding: '2px 8px', borderRadius: '12px' }}>
                    {post.category}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Read Full Post</Button>
                </CardActions>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;