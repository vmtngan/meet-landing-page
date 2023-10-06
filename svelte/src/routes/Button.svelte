<script lang="ts">
	export let variant: 'primary' | 'secondary';
</script>

<button
	class={`${
		variant === 'primary' ? 'bg-boston-blue hover:bg-seagull' : 'bg-plum hover:bg-blue-magenta'
	} rounded-[29px] px-10 py-4 text-[16px] font-black leading-[26px] text-white`}
>
	<slot />
</button>
