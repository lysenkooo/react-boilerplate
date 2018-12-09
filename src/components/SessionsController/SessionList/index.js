import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchSessionList } from '../../../lib/api'
import SessionTable from './SessionTable/index.js'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'


const styles = (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  }
})

class SessionList extends Component {
  state = {
    sessions: null
  }

  componentDidMount() {
    fetchSessionList()
      .then(response => {
        this.setState({ sessions: response.data })
      })
      .catch(error => {
        this.setState({ sessions: [] })
      })
  }

  render() {
    const { classes } = this.props

    return (
      <Paper className={classes.root}>
        {
          this.state.sessions
          ? (
            <SessionTable sessions={this.state.sessions} />
          )
          : <CircularProgress className={classes.progress} size={50} />
        }
      </Paper>
    )
  }
}

SessionList.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SessionList))
