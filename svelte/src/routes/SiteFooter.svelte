<script>
	import Order from './Order.svelte';
	import Button from './Button.svelte';
</script>

<section class="relative bg-boston-blue">
	<div
		class="absolute inset-0 h-full w-full bg-footer-mobile bg-cover opacity-10 md:bg-footer-tablet lg:bg-footer-desktop"
	/>
	<div
		class="relative mt-28 pb-[72px] pt-[92px] text-lotion md:pb-[66px] lg:pb-[104px] lg:pt-[116px]"
	>
		<div class="absolute inset-x-1/2 -top-28">
			<Order index="02" />
		</div>
		<div
			class="mx-auto flex flex-col items-center justify-between text-center lg:max-w-[1110px] lg:flex-row lg:text-left"
		>
			<h2
				class="mb-6 max-w-[327px] text-[32px] font-black leading-9 md:mb-8 md:max-w-[457px] md:text-[40px] md:leading-[44px] lg:mb-0 lg:max-w-[350px]"
			>
				Experience more together
			</h2>
			<p
				class="mb-8 max-w-[327px] text-[18px] font-medium leading-[26px] md:mb-10 md:max-w-[573px] lg:mb-0 lg:max-w-[350px]"
			>
				Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.
			</p>
			<Button variant="secondary">Download <span class="text-lavender-purple">v1.3</span></Button>
		</div>
	</div>
</section>
