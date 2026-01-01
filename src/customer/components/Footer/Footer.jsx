import { Button } from '@headlessui/react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import React from 'react'

function Footer() {
    return (
        <Box sx={{ backgroundColor: "black", color: "white" }}>
            <Container maxWidth="lg">
                {/* Main footer content with 4 columns - full width with spacing */}
                <Grid
                    container
                    spacing={{ xs: 4, sm: 6, md: 8 }}
                    sx={{ py: 8 }}
                >
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography sx={{ pb: 3, fontWeight: 600 }} variant='h6' gutterBottom>
                            Company
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            <Button className='text-white hover:text-gray-300 text-left justify-start' style={{ textTransform: 'none', padding: 0 }}>
                                About
                            </Button>
                            <Button className='text-white hover:text-gray-300 text-left justify-start' style={{ textTransform: 'none', padding: 0 }}>
                                Blog
                            </Button>
                            <Button className='text-white hover:text-gray-300 text-left justify-start' style={{ textTransform: 'none', padding: 0 }}>
                                Press
                            </Button>
                            <Button className='text-white hover:text-gray-300 text-left justify-start' style={{ textTransform: 'none', padding: 0 }}>
                                Jobs
                            </Button>
                            <Button className='text-white hover:text-gray-300 text-left justify-start' style={{ textTransform: 'none', padding: 0 }}>
                                Partners
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography sx={{ pb: 3, fontWeight: 600 }} variant='h6' gutterBottom>
                            Solutions
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            <Button className='text-white hover:text-gray-300 text-left justify-start' style={{ textTransform: 'none', padding: 0 }}>
                                Marketing
                            </Button>
                            <Button className='text-white hover:text-gray-300 text-left justify-start' style={{ textTransform: 'none', padding: 0 }}>
                                Analytics
                            </Button>
                            <Button className='text-white hover:text-gray-300 text-left justify-start' style={{ textTransform: 'none', padding: 0 }}>
                                Commerce
                            </Button>
                            <Button className='text-white hover:text-gray-300 text-left justify-start' style={{ textTransform: 'none', padding: 0 }}>
                                Insights
                            </Button>
                            <Button className='text-white hover:text-gray-300 text-left justify-start' style={{ textTransform: 'none', padding: 0 }}>
                                Support
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography sx={{ pb: 3, fontWeight: 600 }} variant='h6' gutterBottom>
                            Documentation
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            <Button className='text-white hover:text-gray-300 text-left justify-start' style={{ textTransform: 'none', padding: 0 }}>
                                Guides
                            </Button>
                            <Button className='text-white hover:text-gray-300 text-left justify-start' style={{ textTransform: 'none', padding: 0 }}>
                                API Status
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography sx={{ pb: 3, fontWeight: 600 }} variant='h6' gutterBottom>
                            Legal
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            <Button className='text-white hover:text-gray-300 text-left justify-start' style={{ textTransform: 'none', padding: 0 }}>
                                Privacy
                            </Button>
                            <Button className='text-white hover:text-gray-300 text-left justify-start' style={{ textTransform: 'none', padding: 0 }}>
                                Terms
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

                {/* Copyright section */}
                <Box sx={{ 
                    py: 5,
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    mt: 4,
                    textAlign: 'center'
                }}>
                    <Typography variant="body2" component="p" sx={{ mb: 1 }}>
                        &copy;2025 My Company. All rights reserved.
                    </Typography>

                    <Typography variant="body2" component="p" sx={{ mb: 1 }}>
                        Made with love by Me.
                    </Typography>

                    <Typography variant="body2" component="p">
                        Icons made by {' '}
                        <Link href="https://www.freepik.com" color="inherit" underline="always">
                            Freepik
                        </Link>{' '}
                        from{' '}
                        <Link href="https://www.flaticon.com/" color="inherit" underline="always">
                            www.flaticon.com
                        </Link>
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer