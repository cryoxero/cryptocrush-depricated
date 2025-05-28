#!/usr/bin/env python
import os
import sys
from pathlib import Path

# Ensure 'src' is discoverable
sys.path.insert(0, str(Path(__file__).resolve().parent / "src"))

def main():
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'cryptocrush.core.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError("Couldn't import Django.") from exc
    execute_from_command_line(sys.argv)

if __name__ == '__main__':
    main()

