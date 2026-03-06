// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from "starlight-llms-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://manaobot.netlify.app/",
  integrations: [
    starlight({
      title: 'Manao',
      plugins: [starlightLlmsTxt()],
      logo: {
        src: "./public/manao_mini.svg",
        replacesTitle: true,
      },
      defaultLocale: 'root',
      locales: {
        en: {
          label: 'English',
        },
        root: {
          lang: "th",
          label: 'ภาษาไทย',
        },
      },
      customCss: [
        './src/styles/custom.css',
        '@fontsource/mitr/400.css',
        '@fontsource/mitr/600.css',
        '@fontsource/sarabun/400.css',
        '@fontsource/sarabun/600.css',
      ],
      social: [{icon: 'github', label: 'GitHub', href: 'https://github.com/tinarskii/manao'}],
      sidebar: [
        {
          label: 'Streamer Guide',
          translations: { th: "คู่มือสำหรับสตรีมเมอร์" },
          items: [
            {
              label: 'Installation',
              translations: { th: "การติดตั้ง" },
              items: [
                {
                  label: 'Getting Started',
                  translations: { th: "มาเริ่มกันเถอะ" },
                  slug: 'guides/getting-started'
                },
                {
                  label: 'Receive Client id and Secrets from Twitch',
                  translations: { th: "รับไคล์แอนต์ไอดีและซีเครทจากทวิช" },
                  slug: 'guides/receive-client-id-and-secrets-from-twitch'
                },
                {
                  label: 'Project Installation',
                  translations: { th: "ติดตั้งโปรเจกต์" },
                  slug: 'guides/project-installation'
                },
                {
                  label: 'Setting up Manao',
                  translations: { th: "ตั้งค่ามะนาว" },
                  slug: 'guides/setting-up-manao'
                },
              ]
            },
            {
              label: 'Basic Usage',
              translations: { th: "การใช้งานพื้นฐาน" },
              items: [
                {
                  label: 'Using ManaoWeb',
                  translations: { th: "เริ่มใช้งานมะนาวเว็บ" },
                  slug: 'guides/using-manaoweb'
                },
                {
                  label: 'Adding Overlays in OBS',
                  translations: { th: "เพิ่มโอเวอร์เลย์ใน OBS" },
                  slug: 'guides/adding-overlays-in-obs'
                },
              ]
            },
            {
              label: 'Customization',
              translations: { th: "การปรับแต่งขั้นสูง" },
              items: [
                {
                  label: 'Linking Channel Points to Soundboard',
                  translations: { th: "ลิงก์แต้มช่องกับซาวด์บอร์ด" },
                  slug: 'guides/linking-channel-points-to-soundboard'
                },
                {
                  label: 'Adding Custom Replies',
                  translations: { th: "เพิ่มข้อความตอบกลับอัตโนมัติ" },
                  slug: 'guides/adding-custom-replies'
                },
                {
                  label: 'Writing your First Custom Command',
                  translations: { th: "เขียนคำสั่งแรก" },
                  slug: 'guides/writing-your-first-custom-command'
                },
              ]
            },
            {
              label: 'External Integrations',
              translations: { th: "การเชื่อมต่อภายนอก" },
              items: [
                {
                  label: 'Connecting to External Events',
                  translations: { th: "เชื่อมต่อกับอีเวนต์ภายนอก" },
                  slug: 'guides/connecting-to-external-events'
                },
              ]
            },
            {
              label: 'Discord Integration',
              translations: { th: "มะนาวกับ Discord" },
              items: [
                {
                  label: 'Getting Started',
                  translations: { th: "มาเริ่มกันเถอะ" },
                  slug: 'discord/getting-started'
                },
                {
                  label: 'Receive Discord Credentials',
                  translations: { th: "รับโทเค็นและไอดีไคล์เอนต์ของบอต" },
                  slug: 'discord/receive-discord-credentials'
                },
                {
                  label: 'Making the Bot Online',
                  translations: { th: "ทำให้บอตออนไลน์" },
                  slug: 'discord/making-the-bot-online'
                },
              ]
            },
            {
              label: 'Kick Integration',
              translations: { th: "มะนาวกับ Kick" },
              items: [
                {
                  label: 'Getting Started',
                  translations: { th: "มาเริ่มกันเถอะ" },
                  slug: 'kick/getting-started'
                },
                {
                  label: 'Setup Ngrok',
                  translations: { th: "ตั้งค่า Ngrok" },
                  slug: 'kick/setup-ngrok'
                },
                {
                  label: 'Receive Kick Credentials',
                  translations: { th: "รับข้อมูลของบอต" },
                  slug: 'kick/receive-kick-credentials'
                },
              ]
            },
          ],
        },

        {
          label: 'User Guide',
          translations: { th: "คู่มือสำหรับผู้ใช้" },
          items: [
            {
              label: 'Commands',
              translations: { th: 'คำสั่ง' },
              items: [
                {
                  label: 'All Commands',
                  translations: { th: 'คำสั่งทั้งหมด' },
                  slug: 'commands'
                },
              ]
            },
            {
              label: 'Linking Your Account',
              translations: { th: "การเชื่อมบัญชี" },
              slug: 'user-guides/linking-your-account'
            },
          ]
        },
        //
        // {
        //   label: 'Developer Guide',
        //   translations: { th: "คู่มือสำหรับนักพัฒนา" },
        //   items: [
        //     {
        //       label: '@manaobot/kickit',
        //       translations: { th: "@manaobot/kickit" },
        //       items: [
        //         {
        //           label: 'Getting Started',
        //           translations: { th: "มาเริ่มกันเถอะ" },
        //           slug: 'dev/kickit/getting-started'
        //         }
        //       ]
        //     },
        //   ]
        // }
      ],
    }),
  ],
});