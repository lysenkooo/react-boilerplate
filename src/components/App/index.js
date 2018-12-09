import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ActionCable from 'action-cable-react-jwt'
import Cookies from 'js-cookie'
import 'normalize.css'
import Auth from '../Auth'
import Layout from '../Layout'
import * as userActions from '../../actions/user'


class App extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.userInit()

    const token = Cookies.get('token')
    const cable = ActionCable.createConsumer(process.env.REACT_APP_WS_URL, token)

    const usersChannel = cable.subscriptions.create({ channel: 'UsersChannel' }, {
      connected: () => {
        usersChannel.perform('ping')
      },
      disconnected: () => {
        console.log('Disconnected')
      },
      received: (data) => {
        console.log(data)
      }
    })
  }

  render() {
    if (!this.props.user.email) {
      return <Auth />
    }

    return (
      <Layout>
        {this.props.children}
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  userInit: userActions.init
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
