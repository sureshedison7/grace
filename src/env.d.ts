/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
	interface Locals extends Runtime {}
}

type Env = {
	DB: D1Database;
  };

declare module 'astro' {
	interface Locals extends Runtime<Env> {}
  }