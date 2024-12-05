<script lang="ts">
    import EditableSetting from '$lib/ui/forms/EditableSetting.svelte';
    import ToolTipStore from '$lib/stores/ToolTipStore';
</script>


<EditableSetting label="Label" value="Test" tooltip={true} on:mouseover={ () => { 
        $ToolTipStore.title = '';
        $ToolTipStore.body = ['This is your label 1 helpful information.'] 
        $ToolTipStore.more = '';
    }}/>

<EditableSetting label="Label2" value="Test" tooltip={true} on:mouseover={ () => { 
        $ToolTipStore.title = 'Label 2';
        $ToolTipStore.body = ['This is your label 2.'];
        $ToolTipStore.more = '';
    }}>
</EditableSetting>



