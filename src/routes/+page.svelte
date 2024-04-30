<script type="ts">
    // export let data;
</script>


<table border="1">
    <tr>
        <th>Resource</th>
        <th>POST (Create)</th>
        <th>GET (Read)</th>
        <th>PUT (Update)</th>
        <th>DELETE (Delete)</th>
        <th>Millicast UI</th>
        <th>Millicast API++</th>
    </tr>
    <tr>
        <td>Account</td>
        <td></td>
        <td>
            <p><a href="./millicast/api/geo/account">/millicast/api/geo/account</a></p>
            <p><a href="./millicast/api/account/geo_cascade">/millicast/api/account/geo_cascade</a></p>
        </td>
        <td></td>
        <td></td>
        <td>
            
        </td>
        <td>
            <p><a href="./api/account">GET /api/account</a></p>
        </td>
    </tr>

    <tr>
        <td>Analytics</td>
        <td></td>
        <td>
            <p><a href="./millicast/api/analytics/account/total">/millicast/api/analytics/account/total</a></p>
            <p><a href="./millicast/api/analytics/account/series">/millicast/api/analytics/account/series</a></p>
            <p><a href="./millicast/api/analytics/account/geo_total">/millicast/api/analytics/account/geo_total</a></p>
            <p><a href="./millicast/api/analytics/account/geo_series">/millicast/api/analytics/account/geo_series</a></p>
            <p><a href="./millicast/api/analytics/streams/total">/millicast/api/analytics/streams/total</a></p>
            <p><a href="./millicast/api/analytics/streams/series">/millicast/api/analytics/streams/series</a></p>
            <p><a href="./millicast/api/analytics/streams/geo_total">/millicast/api/analytics/streams/geo_total</a></p>
            <p><a href="./millicast/api/analytics/streams/geo_series">/millicast/api/analytics/streams/geo_series</a></p>
            <p><a href="./millicast/api/analytics/tracking/total">/millicast/api/analytics/tracking/total</a></p>
            <p><a href="./millicast/api/analytics/tracking/series">/millicast/api/analytics/tracking/series</a></p>
            <p><a href="./millicast/api/analytics/tracking/streams/total">/millicast/api/analytics/tracking/streams/total</a></p>
            <p><a href="./millicast/api/analytics/tracking/streams/series">/millicast/api/analytics/tracking/streams/series</a></p>
        </td>
        <td></td>
        <td></td>
        <td>
            
        </td>
        <td></td>
    </tr>
    <tr>
        <td>Clusters</td>
        <td></td>
        <td>
            <p><a href="./millicast/api/cluster">/millicast/api/cluster</a></p>
        </td>
        <td></td>
        <td></td>
        <td>
            <p><a href="./test/components/clusters">select cluster</a></p>
        </td>
        <td>
            <p><a href="./api/countries">GET /api/countries</a></p>
        </td>
    </tr>
    <tr>
        <td>Tokens</td>
        <td></td>
        <td>
            <p><a href="./millicast/api/publish_token/list">/millicast/api/publish_token/list</a></p>
            <p><a href="./millicast/api/publish_token/list_by_name">/millicast/api/publish_token/list_by_name</a></p>
            <p><a href="./millicast/api/publish_token/active">/millicast/api/publish_token/active</a></p>
            <p><a href="./millicast/api/publish_token/active/all">/millicast/api/publish_token/active/all</a></p>
            <p><a href="./millicast/api/publish_token/id">/millicast/api/publish_token/:id</a></p>
            <hr/>
            <p><a href="./millicast/api/subscribe_token/list">/millicast/api/subscribe_token/list</a></p>
            <p><a href="./millicast/api/subscribe_token/list_by_name">/millicast/api/subscribe_token/list_by_name</a></p>
            <p><a href="./millicast/api/subscribe_token/id">/millicast/api/subscribe_token/:id</a></p>
            <hr/>
        </td>
        <td></td>
        <td></td>
        <td>
            <p><a href="./test/components/tokens">select tokens</a></p>
        </td>
        <td></td>
    </tr>
    <tr>
        <td>Recordings</td>
        <td></td>
        <td>
            <p><a href="./millicast/api/v2/record_files/list">/millicast/api/v2/record_files/list</a></p>
            <p><a href="./millicast/api/v2/record_files/mediaAssetId">/millicast/api/v2/record_files/:mediaAssetId</a></p>
            <hr/>
            <p><a href="./millicast/api/record_files/list">/millicast/api/record_files/list</a></p>
            <p><a href="./millicast/api/record_files/list_by_token">/millicast/api/record_files/list_by_token</a></p>
            <p><a href="./millicast/api/record_files/list_by_stream">/millicast/api/record_files/list_by_stream</a></p>
            <p><a href="./millicast/api/record_files/recordFileId">/millicast/api/record_files/:recordFileId</a></p>
            <p><a href="./millicast/api/record_files/usage">/millicast/api/record_files/usage</a></p>
            <p><a href="./millicast/api/record_files/usage_billing">/millicast/api/record_files/usage_billing</a></p>

            <hr/>
        </td>
        <td></td>
        <td></td>
        <td>
            
        </td>
        <td></td>
    </tr>
    <tr>
        <td>Streams</td>
        <td></td>
        <td>
        </td>
        <td></td>
        <td></td>
        <td>
            <p><a href="./test/components/streams">select stream</a></p>
            <p><a href="./test/components/player">stream player</a></p>
        </td>
        <td>
            <p><a href="./api/streams">GET /api/streams</a></p>
        </td>
    </tr>

    <tr>
        <td>Transcoder</td>
        <td></td>
        <td>
            <p><a href="./millicast/api/transcoders">/millicast/api/transcoders</a></p>
            <p><a href="./millicast/api/transcoders/id">/millicast/api/transcoders/:id</a></p>
            <p><a href="./millicast/api/transcoders/instances">/millicast/api/transcoders/instances</a></p>
            <p><a href="./millicast/api/transcoders/instances/id">/millicast/api/transcoders/instances/:id</a></p>
            <p><a href="./millicast/api/transcoders/profiles">/millicast/api/transcoders/profiles</a></p>
        </td>
        <td></td>
        <td></td>
        <td>
            
            
        </td>
        <td>
            
        </td>
    </tr>

    <tr>
        <td>Webhooks</td>
        <td></td>
        <td>
        </td>
        <td></td>
        <td></td>
        <td>
            
            
        </td>
        <td>
            
        </td>
    </tr>

</table>








