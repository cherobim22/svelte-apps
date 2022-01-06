
<script>
    export let size = 50
    export let active = false;
</script>

{#if active}
 <img class="image" src="sun_010.svg" width={size} alt="">   
{/if}


<style>
  .image {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90px;
    height: 90px;
    z-index: 100;
    margin:-60px 0 0 -60px;
    -webkit-animation:spin 2s linear infinite;
    -moz-animation:spin 2s linear infinite;
    animation:spin 2s linear infinite;
}
@-moz-keyframes spin { 
    100% { -moz-transform: rotate(360deg); } 
}
@-webkit-keyframes spin { 
    100% { -webkit-transform: rotate(360deg); } 
}
@keyframes spin { 
    100% { 
        -webkit-transform: rotate(360deg); 
        transform:rotate(360deg); 
    } 
}

</style>