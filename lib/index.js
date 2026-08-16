/**
 * novel-writer — DeepSeek Harness (DSH) 预设插件。
 *
 * 作用：每次 DSH 启动（加载本插件）时，把包内自带的 agent.cordis.yml 和
 * preset.yml 复制到 ~/.dsh/.agent-presets/novel-writer/，从而注册
 * 「小说创作 · 六角色协同」预设。安装后刷新页面即可在预设列表里看到它。
 */
import { mkdir, copyFile } from "node:fs/promises";
import { homedir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

/** Cordis 插件名（须与 cordis.patch.yml 里的 id 一致）。 */
const name = "novel-writer";

/** 本文件所在目录（<包>/lib）。 */
const here = dirname(fileURLToPath(import.meta.url));

/** 预设文件在包根目录（lib/ 的上一级）。 */
const SOURCE_DIR = join(here, "..");

/** 目标目录：用户主目录下的 DSH 预设目录。 */
function targetDir() {
  return join(homedir(), ".dsh", ".agent-presets", "novel-writer");
}

/** 把预设两个文件落地到 ~/.dsh/.agent-presets/novel-writer/。 */
async function installPreset() {
  const dest = targetDir();
  await mkdir(dest, { recursive: true });
  await copyFile(join(SOURCE_DIR, "agent.cordis.yml"), join(dest, "agent.cordis.yml"));
  await copyFile(join(SOURCE_DIR, "preset.yml"), join(dest, "preset.yml"));
}

function apply(ctx) {
  ctx.effect(() => {
    installPreset().catch((err) => {
      console.error("[novel-writer] 预设落地失败：", err);
    });
  });
}

export { apply, name };
