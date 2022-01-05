<script context="module">
	import { browser, dev } from '$app/env';
	import Table from '$lib/components/TableComponent.svelte'

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;


	const ROWS = [
    {
      name: 'Rufus',
      last: 'Sarsparilla',
      email: 'rufus.sarsparilla@example.com',
      
    },
    {
      name: 'Albert',
      last: 'Armadillo',
      email: 'albert.armadillo@example.com',
      
    },
    {
      name: 'Arron',
      last: 'Douglas',
      email: 'arron.douglas@example.com',
          },
    {
      name: 'Reginald',
      last: 'Rhodes',
      email: 'reginald.rhodes@example.com',
      
    },
    {
      name: 'Jimmy',
      last: 'Mendoza',
      email: 'jimmy.mendoza@example.com',
          },
    {
      name: 'Georgia',
      last: 'Montgomery',
      email: 'georgia.montgomery@example.com',
          },
    {
      name: 'Serenity',
      last: 'Thomas',
      email: 'serenity.thomas@example.com',
      
    },
    {
      name: 'Tonya',
      last: 'Elliott',
      email: 'tonya.elliott@example.com',
      
    },
    {
      name: 'Maxine',
      last: 'Turner',
      email: 'maxine.turner@example.com',
      
    },
    {
      name: 'Max',
      last: 'Headroom',
      email: 'max.headroom@example.com',
          }
  ];

</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	<h1>Table</h1>

	<Table 
		data={ROWS} 
		actions={[{name:'info', text:'info'}]}
		columns={['name', 'email']}
    pagination={{limit:3, summary:false}}
	/>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
