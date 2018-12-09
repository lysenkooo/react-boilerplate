import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { CircularProgress } from '@material-ui/core'
import * as userActions from '../../actions/user'
import styles from './styles'


class Auth extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object,
  }

  state = {
    email: '',
    password: ''
  }

  login = () => {
    this.props.userLogin(
      this.state.email,
      this.state.password
    )
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Paper className={classes.form} elevation={1}>
          <Typography variant="h5" component="h3">
            Sign In
          </Typography>

          <div>
            <TextField
              className={classes.textField}
              label="Email"
              autoFocus={true}
              onChange={(e) => this.setState({ email: e.target.value })}
              fullWidth
            />
          </div>

          <div>
            <TextField
              className={classes.textField}
              type="password"
              label="Password"
              onChange={(e) => this.setState({ password: e.target.value })}
              fullWidth
            />
          </div>

          <div>
            {
              this.props.user.error
              ? this.props.user.error
              : null
            }
          </div>

          {
            this.props.user.isFetching
            ? <CircularProgress className={classes.progress} size={50} />
            : (
              <Button
                variant="contained"
                color="primary"
                component="div"
                className={classes.button}
                onClick={this.login}
              >
                Login
              </Button>
            )
          }
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  userLogin: userActions.login
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(Auth))
