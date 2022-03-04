import React from 'react'
import { Grid,Paper, Avatar, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Textarea from '../components/FormUi/Textarea' 
import Button from '../components/FormUi/Button'
import { Formik , Form } from 'formik';
import * as yup from "yup" 


const Login=({handleChange})=>{

    const paperStyle={padding :20,height:'74vh',width:260, margin:"0 auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const initialValue = {
      username: '',
      password: '',
      remember:false
    }
    const validate = yup.object().shape({
      username:yup.string().email("Please enter a valid email").required('Required'),
      password:yup.string().required('Required')
    })
    const onSubmit = (values,props) => {
      setTimeout(() =>{
        props.resetForm()
        props.setSubmitting(false)
      },1000)
    }

    return(
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Login</h2>
                </Grid>
                <Formik initialValues={initialValue} onSubmit={onSubmit} validationSchema={validate} >
                  {(props)=> (
                    <Form>
                    <Textarea label='Username' name='username' placeholder='Enter username' />
                    <Textarea label='Password' name='password' placeholder='Enter password' type='password' />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label="Remember me"
                    />
                    <Button style={btnstyle}>{props.isSubmitting ? "Loading":"Login"  }</Button> 
                  </Form>
                  )}                  
                </Formik>
                <Typography > Do you have an account ?
                     <Link href="#" onClick={()=>handleChange("event",1)} >
                        Sign Up 
                </Link>
                
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login