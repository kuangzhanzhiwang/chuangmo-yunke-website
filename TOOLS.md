# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin

### TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

## Gateway

- **Token:** `6428ae428950b696a290f06192ca0d98`
- **Port:** 15235
- **Mode:** local
- **Bind:** lan

## GitHub

- **Token:** `github_pat_11B24...` (Fine-grained PAT, stored in `~/.openclaw/.env`)
- **User:** kuangzhanzhiwang
- **API Base:** `https://api.github.com`

## 文件读取

- **脚本:** `~/.openclaw/workspace/scripts/read_file.py`
- **支持格式:** txt, md, json, csv, yaml, xml, html, pdf, docx, doc
- **用法:** `python3 ~/.openclaw/workspace/scripts/read_file.py <文件路径>`
- **依赖:** pypdf2, python-docx (已安装)

---

Add whatever helps you do your job. This is your cheat sheet.
