<script>
    import { h } from "gridjs";
    import Grid from "gridjs-svelte"

    export let data = []

    export let columns = data.length ? Object.keys(data[0]) : [];

    export let actions =[]

    export let pagination = {
        enabled: true,
        limit: 2,
        summary: false
    }

    export let search = false;

    function action(row){
        alert(row.cells[0].data)
    }

    let language = {
        'search': {
            'placeholder': '🔍 Search...aaaa'
        },
        'pagination': {
            'previous': '⬅️',
            'next': '➡️',
            'showing': '😃 Displaying',
            'results': () => 'Records'
        }
    }

    actions.forEach(element => {
        if(element.name == "info"){
            columns.push({ 
                name: 'Actions',
                formatter: (cell, row) => {
                return [h('button', {
                        className: 'btn btn-primary',
                        onClick: () => {action(row)	}
                    }, `${element.text}`)]
                }
            })
        }
    });
</script>

<Grid {columns} {data} {pagination} {language} {search}/>