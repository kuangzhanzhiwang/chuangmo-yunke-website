#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
多格式文件读取工具
支持：txt, md, json, csv, pdf, docx, doc, rtf
"""
import sys
import os

def read_text(path):
    """读取纯文本文件"""
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def read_pdf(path):
    """读取 PDF 文件"""
    from PyPDF2 import PdfReader
    reader = PdfReader(path)
    text = []
    for page in reader.pages:
        text.append(page.extract_text())
    return '\n'.join(text)

def read_docx(path):
    """读取 Word 文档"""
    from docx import Document
    doc = Document(path)
    text = []
    for para in doc.paragraphs:
        text.append(para.text)
    return '\n'.join(text)

def main():
    if len(sys.argv) < 2:
        print("用法：python read_file.py <文件路径>")
        sys.exit(1)
    
    path = sys.argv[1]
    if not os.path.exists(path):
        print(f"错误：文件不存在：{path}")
        sys.exit(1)
    
    ext = os.path.splitext(path)[1].lower()
    
    try:
        if ext in ['.txt', '.md', '.json', '.csv', '.yaml', '.yml', '.xml', '.html', '.htm']:
            content = read_text(path)
        elif ext == '.pdf':
            content = read_pdf(path)
        elif ext in ['.docx', '.doc']:
            content = read_docx(path)
        else:
            # 尝试作为文本读取
            content = read_text(path)
        
        print(content)
    except Exception as e:
        print(f"错误：{e}")
        sys.exit(1)

if __name__ == '__main__':
    main()
