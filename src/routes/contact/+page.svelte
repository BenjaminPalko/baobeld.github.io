<script>
	import { enhance } from '$app/forms';
	import { Croissant, Mail, Send, UserRound } from 'lucide-svelte';
</script>

<div class="flex w-full justify-around">
	<div class="flex flex-col gap-4">
		<h1 class="text-4xl">
			Hello there friend.<br />Want to chat?
		</h1>
		<h5 class="text-lg">Reach out! 🤝</h5>
		<div class="flex items-center gap-4 rounded-lg bg-base-100 p-4 shadow-lg">
			<Send size="24" />
			<div class="flex flex-col font-semibold">
				Send me an email!
				<a class="link link-primary" href="mailto:benjaminpalko@hotmail.com">
					benjaminpalko@hotmail.com
				</a>
			</div>
		</div>
	</div>
	<form id="contact" use:enhance>
		<div class="flex flex-col gap-4 bg-base-200">
			<h2 class="text-xl font-semibold">Send me a message!</h2>
			<label class="input input-bordered flex items-center gap-2">
				<UserRound />
				<input name="name" type="text" class="grow" placeholder="What is your name?" />
			</label>
			<label class="input input-bordered flex items-center gap-2">
				<Mail />
				<input name="email" type="text" class="grow" placeholder="I'm going to need your email." />
			</label>
			<label class="input input-bordered flex items-center gap-2">
				<Croissant />
				<input name="name" type="text" class="grow" placeholder="Subject" />
			</label>
			<label class="form-control">
				<div class="label">
					<span class="label-text">What do you want to say?</span>
				</div>
				<textarea
					name="message"
					form="contact"
					class="textarea textarea-bordered h-24"
					placeholder="Hello friend..."
				></textarea>
			</label>
		</div>
	</form>
</div>
