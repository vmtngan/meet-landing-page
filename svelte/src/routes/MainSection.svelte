<script>
	import Order from './Order.svelte';
</script>

<section class="flex flex-col items-center text-center">
	<Order index="01" />
	<div
		class="my-16 grid max-w-[327px] grid-cols-2 grid-rows-2 gap-6 md:mb-12 md:max-w-[689px] md:grid-cols-4 md:grid-rows-1 md:gap-3 lg:mb-20 lg:max-w-[1110px] lg:gap-7"
	>
		<img class="rounded-lg" src="/images/image-woman-in-videocall.jpg" alt="woman in video call" />
		<img
			class="rounded-lg"
			src="/images/image-women-videochatting.jpg"
			alt="women video chatting"
		/>
		<img class="rounded-lg" src="/images/image-men-in-meeting.jpg" alt="men in meeting" />
		<img class="rounded-lg" src="/images/image-man-texting.jpg" alt="man texting" />
	</div>
	<div
		class="mb-6 text-[16px] font-black uppercase leading-[26px] tracking-[4px] text-boston-blue md:mb-4"
	>
		Built for modern use
	</div>
	<h2
		class="mb-8 max-w-[327px] text-[32px] font-black leading-9 text-valhalla md:max-w-[445px] md:text-[40px] md:leading-[44px]"
	>
		Smarter meetings, all in one place
	</h2>
	<p
		class="mb-16 max-w-[327px] text-[16px] font-medium leading-[26px] text-manatee md:mb-20 md:max-w-[457px] md:text-[18px] lg:mb-[72px] lg:max-w-[540px]"
	>
		Send messages, share files, show your screen, and record your meetings — all in one workspace.
		Control who can join with invite-only team access, data encryption, and data export.
	</p>
</section>
