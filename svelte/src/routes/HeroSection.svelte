<script>
	import Button from './Button.svelte';
</script>

<section
	class="relative mx-auto flex flex-col items-center pb-16 pt-12 text-center md:pb-20 lg:pb-28 lg:pt-20"
>
	<img src="/images/logo.svg" alt="logo" />
	<h1
		class="mt-[255px] max-w-[290px] text-[40px] font-black leading-[44px] text-valhalla md:mt-[439px] md:max-w-[339px] md:text-5xl lg:mt-[108px] lg:max-w-[445px] lg:text-[64px] lg:leading-[64px]"
	>
		Group Chat for Everyone
	</h1>
	<p
		class="mt-6 max-w-[327px] text-[16px] font-medium leading-[26px] text-manatee md:max-w-[457px] lg:mt-8 lg:max-w-[540px] lg:text-[18px]"
	>
		Meet makes it easy to connect with others face-to-face virtually and collaborate across any
		device.
	</p>
	<div class="mt-8 flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
		<Button variant="primary">
			Download
			<span class="text-columbia-blue">v1.3</span>
		</Button>
		<Button variant="secondary">What is it?</Button>
	</div>
	<img
		class="absolute right-1/2 top-32 mr-2 w-[199px] md:top-36 md:mr-4 md:w-[394px] lg:top-44 lg:mr-[358px]"
		src="/images/image-hero-left.png"
		alt="hero left"
	/>
	<img
		class="absolute left-1/2 top-32 ml-2 w-[199px] md:top-36 md:ml-4 md:w-[394px] lg:top-44 lg:ml-[358px]"
		src="/images/image-hero-right.png"
		alt="hero right"
	/>
</section>
