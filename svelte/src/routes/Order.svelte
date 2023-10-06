<script lang="ts">
	export let index: string;
</script>

<div class="flex flex-col items-center">
	<div class="h-[84px] w-px bg-manatee/25" />
	<div
		class="flex h-14 w-14 items-center justify-center rounded-full border border-manatee/25 bg-lotion text-[16px] font-black leading-[26px] text-manatee"
	>
		{index}
	</div>
</div>
