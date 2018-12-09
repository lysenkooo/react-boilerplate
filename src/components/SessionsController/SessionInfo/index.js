import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchSession } from '../../../lib/api'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'


const styles = (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  }
})

class SessionInfo extends Component {
  state = {
    session: null
  }

  componentDidMount() {
     fetchSession(this.props.match.params.id)
      .then(response => {
        this.setState({ session: response.data })
      })
      .catch(error => {
        this.setState({ session: null })
      })
  }

  render() {
    const { classes } = this.props

    return (
      <Paper className={classes.root}>
        {
          this.state.session
          ? (
            <Typography variant="h5" component="h3">
              {this.state.session.id}
            </Typography>
          )
          : <CircularProgress className={classes.progress} size={50} />
        }
      </Paper>
    )
  }
}

SessionInfo.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SessionInfo))
