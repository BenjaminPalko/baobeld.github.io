<script lang="ts">
	import { Links } from '$lib/constants';
</script>

<div class="flex flex-col items-center gap-4 text-center">
	<div class={'text-center md:hidden'}>
		<h1 class={'text-4xl'}>Benjamin Palko</h1>
		<p class={'text-xl text-blue-200'}>Software Engineer</p>
	</div>
	<img alt="me" class="h-72 w-2/3 rounded-lg object-cover" src="/waterfall.jpg" />
	<h3 class={'text-xl md:text-center md:text-2xl'}>Hello there and welcome to my website!</h3>

	<p>
		My name is Ben, I'm a Canadian 🍁 living out of Ottawa, Ontario (in an Igloo ☃️). I work as a
		Software Developer full-time and work a pretty wide range of projects in my personal time. Catch
		me working on C++ building the base for a game engine one day, and practicing my drawing skills
		another day.
	</p>
	<p>
		I started with an internship at a small company in my hometown which after graduation became a
		full time position. I wanted to move back to Ottawa so I found myself a job at Mitel and moved
		back in 2020 just in time for lockdown. My time at Mitel was great and I worked with some
		amazing people, eventually I was referred to another company by a former colleague and decided
		to take up the opportunity that presented itself to me.
	</p>
	<p>
		While Software Development is my main career there are many things I love to do in my off time.
		One such thing has been developing games on the side, So far I have participated in 2 GameJams!
		You can check out my submissions at my{' '}
		<a class={'text-blue-400 hover:underline'} href={Links.itch} target={'_blank'}>
			itch.io page
		</a>
		.
	</p>
	<img src={'/climber.jpg'} alt={'Climber'} class={'h-72 w-2/3 rounded-lg object-cover'} />
	<p>
		I am also an amateur rock climber and been climbing for the past year, I love going to the gym
		to wind down with some exercise 🧗‍♂️. Another interest I have is dirt biking, I'm still a complete
		novice getting and my feet wet but it can be quite the rush flying through the forest on narrow
		trails.
	</p>
</div>
