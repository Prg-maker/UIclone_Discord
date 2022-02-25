
import { ServerList } from '../ServerList'
import { ServerName } from '../ServerName'
import { ChannelName } from '../ChannelName'
import { ChannelList } from '../ChannelList'
import { UserInfo } from '../UserInfo'
import { UserList } from '../UserList'
import { ChannelData } from '../ChannelData'


import { Grid } from './styles'


function Layout() {
  return (
    <Grid >
      <ServerList />
      <ServerName />
      <ChannelName />
      <ChannelList />
      <UserInfo />

      <div />
      <UserList />
      <ChannelData/>
    </Grid>
  )

}

export default Layout
