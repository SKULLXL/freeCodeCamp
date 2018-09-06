import React from 'react'
import { Grid, Panel, Button } from '@freecodecamp/react-bootstrap'

import { apiLocation } from '../../config/env.json'
import Layout from '../components/Layout'
import FullWidthRow from '../components/helpers/FullWidthRow'
import { Spacer } from '../components/helpers'

function ShowUnsubscribed({ unsubscribeId }) {
  return (
    <Layout>
      <Grid>
        <FullWidthRow>
          <Spacer />
          <Spacer />
          <Panel bsStyle="primary" className="text-center">
            <Spacer />
            <h2>You have successfully been unsubscribed</h2>
            <p>Whatever you go on to, keep coding!</p>
          </Panel>
        </FullWidthRow>
        {unsubscribeId ? (
          <FullWidthRow>
            <Button
              bsStyle="primary"
              bsSize="lg"
              block={true}
              href={`${apiLocation}/internal/resubscribe/${unsubscribeId}`}
            >
              You can click here to resubscribe
            </Button>
          </FullWidthRow>
        ) : null}
      </Grid>
    </Layout>
  )
}

ShowUnsubscribed.displayName = 'ShowUnsubscribed'

export default ShowUnsubscribed
