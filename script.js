/**
 * OS Practical Hub — Complete Client Script & Practical Data
 * All 8 Operating Systems Practicals with C, C++, Python & Bash Implementations
 */

const practicalsData = [
  {
    "id": 1,
    "number": "PR-01",
    "title": "Study, Demonstrate and Execute Basic Linux Commands",
    "category": "commands",
    "categoryLabel": "Linux Shell & System Utilities",
    "type": "commands",
    "aim": "To study, demonstrate, and execute essential Linux terminal commands across 8 functional categories: file & directory management, file viewing, system info, process control, permissions, searching & filtering, networking basics, and package/help utilities.",
    "shortDesc": "Comprehensive reference of 40+ essential Linux commands across 8 categories with syntax, examples, and safety badges.",
    "topics": [
      "File & Directory",
      "File Viewing",
      "System Info",
      "Process Control",
      "Permissions",
      "grep & find",
      "Networking",
      "apt & man"
    ],
    "implCount": 8,
    "categories": [
      {
        "name": "File and Directory Commands",
        "commands": [
          {
            "name": "pwd",
            "purpose": "Print the full absolute path of the current working directory.",
            "syntax": "pwd [OPTION]",
            "examples": [
              {
                "cmd": "pwd",
                "out": "/home/student/os_lab"
              },
              {
                "cmd": "pwd -P",
                "out": "/mnt/c/Users/student/os_lab"
              }
            ]
          },
          {
            "name": "ls",
            "purpose": "List directory contents, file types, sizes, and timestamps.",
            "syntax": "ls [OPTION]... [FILE]...",
            "examples": [
              {
                "cmd": "ls -la",
                "out": "total 16\ndrwxr-xr-x 2 student student 4096 Nov 28 10:00 .\ndrwxr-xr-x 5 student student 4096 Nov 28 09:30 ..\n-rw-r--r-- 1 student student  512 Nov 28 10:00 fcfs.c"
              },
              {
                "cmd": "ls -lh *.c",
                "out": "-rw-r--r-- 1 student student 1.4K Nov 28 10:02 scheduler.c"
              }
            ]
          },
          {
            "name": "cd",
            "purpose": "Change the shell's current working directory.",
            "syntax": "cd [DIRECTORY]",
            "examples": [
              {
                "cmd": "cd /var/log",
                "out": "(Changes current directory to /var/log)"
              },
              {
                "cmd": "cd ..",
                "out": "(Moves up one directory level to the parent directory)"
              }
            ]
          },
          {
            "name": "mkdir",
            "purpose": "Create one or more new directories.",
            "syntax": "mkdir [OPTION]... DIRECTORY...",
            "examples": [
              {
                "cmd": "mkdir os_practicals",
                "out": "(Creates directory 'os_practicals')"
              },
              {
                "cmd": "mkdir -p lab3/src/bin",
                "out": "(Creates nested parent directories lab3, src, and bin)"
              }
            ]
          },
          {
            "name": "rmdir",
            "purpose": "Remove empty directories.",
            "syntax": "rmdir [OPTION]... DIRECTORY...",
            "danger": "Delete Operation (Empty dirs only)",
            "examples": [
              {
                "cmd": "rmdir temp_dir",
                "out": "(Removes 'temp_dir' if empty)"
              },
              {
                "cmd": "rmdir -p a/b/c",
                "out": "(Removes c, then b, then a if all become empty)"
              }
            ]
          },
          {
            "name": "touch",
            "purpose": "Create an empty file or update an existing file's access/modification timestamps.",
            "syntax": "touch [OPTION]... FILE...",
            "examples": [
              {
                "cmd": "touch notes.txt",
                "out": "(Creates empty file notes.txt if it does not exist)"
              },
              {
                "cmd": "touch prog1.c prog2.c",
                "out": "(Creates multiple empty files at once)"
              }
            ]
          },
          {
            "name": "cp",
            "purpose": "Copy files and directories from source to destination.",
            "syntax": "cp [OPTION]... SOURCE DEST",
            "danger": "Can overwrite existing destination files",
            "examples": [
              {
                "cmd": "cp fcfs.c fcfs_backup.c",
                "out": "(Copies fcfs.c to fcfs_backup.c)"
              },
              {
                "cmd": "cp -r lab1/ lab1_backup/",
                "out": "(Recursively copies directory lab1 and its contents)"
              }
            ]
          },
          {
            "name": "mv",
            "purpose": "Move or rename files and directories.",
            "syntax": "mv [OPTION]... SOURCE DEST",
            "danger": "Can overwrite existing destination files",
            "examples": [
              {
                "cmd": "mv old_name.c new_name.c",
                "out": "(Renames old_name.c to new_name.c)"
              },
              {
                "cmd": "mv *.c src/",
                "out": "(Moves all .c files into src/ directory)"
              }
            ]
          },
          {
            "name": "rm",
            "purpose": "Remove (delete) files or directories permanently.",
            "syntax": "rm [OPTION]... FILE...",
            "danger": "DESTRUCTIVE: Permanently deletes files/directories",
            "examples": [
              {
                "cmd": "rm -i temp.txt",
                "out": "rm: remove regular file 'temp.txt'? y"
              },
              {
                "cmd": "rm -rf build_temp/",
                "out": "(Forcefully and recursively deletes build_temp/ without prompt)"
              }
            ]
          }
        ]
      },
      {
        "name": "File Viewing Commands",
        "commands": [
          {
            "name": "cat",
            "purpose": "Concatenate and print file contents directly to standard output.",
            "syntax": "cat [OPTION]... [FILE]...",
            "examples": [
              {
                "cmd": "cat fcfs.c",
                "out": "#include <stdio.h>\nint main() { ... }"
              },
              {
                "cmd": "cat -n notes.txt",
                "out": "     1\tOperating Systems Lab\n     2\tPractical 01 Linux Commands"
              }
            ]
          },
          {
            "name": "head",
            "purpose": "Display the first N lines (default 10) of a file.",
            "syntax": "head [OPTION]... [FILE]...",
            "examples": [
              {
                "cmd": "head -n 5 /etc/passwd",
                "out": "root:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\n..."
              },
              {
                "cmd": "head -c 64 log.txt",
                "out": "(Prints the first 64 bytes of log.txt)"
              }
            ]
          },
          {
            "name": "tail",
            "purpose": "Display the last N lines of a file or follow live log updates.",
            "syntax": "tail [OPTION]... [FILE]...",
            "examples": [
              {
                "cmd": "tail -n 10 /var/log/syslog",
                "out": "(Prints the last 10 lines of system log)"
              },
              {
                "cmd": "tail -f app.log",
                "out": "(Streams newly appended lines in real time until Ctrl+C)"
              }
            ]
          },
          {
            "name": "less",
            "purpose": "View large files one screen at a time with forward/backward scrolling and search.",
            "syntax": "less [OPTIONS] FILE",
            "examples": [
              {
                "cmd": "less /var/log/dmesg",
                "out": "(Opens interactive pager; press Space/b to scroll, /pattern to search, q to quit)"
              },
              {
                "cmd": "less -N script.js",
                "out": "(Opens script.js in pager with line numbers shown)"
              }
            ]
          },
          {
            "name": "more",
            "purpose": "Basic forward-only terminal pager for viewing text files screen by screen.",
            "syntax": "more [OPTIONS] FILE",
            "examples": [
              {
                "cmd": "more readme.txt",
                "out": "--More--(42%) [Press Space for next page, q to quit]"
              },
              {
                "cmd": "ls -la /usr/bin | more",
                "out": "(Pipes long directory listing through more pager)"
              }
            ]
          }
        ]
      },
      {
        "name": "System Information",
        "commands": [
          {
            "name": "uname",
            "purpose": "Print kernel, OS, architecture, and system hardware information.",
            "syntax": "uname [OPTION]...",
            "examples": [
              {
                "cmd": "uname -a",
                "out": "Linux ubuntu-lab 5.15.0-91-generic #101-Ubuntu SMP x86_64 GNU/Linux"
              },
              {
                "cmd": "uname -r",
                "out": "5.15.0-91-generic"
              }
            ]
          },
          {
            "name": "hostname",
            "purpose": "Display or set the system's network hostname.",
            "syntax": "hostname [OPTION]",
            "examples": [
              {
                "cmd": "hostname",
                "out": "ubuntu-lab"
              },
              {
                "cmd": "hostname -I",
                "out": "192.168.1.42"
              }
            ]
          },
          {
            "name": "whoami",
            "purpose": "Print the effective username of the current logged-in user.",
            "syntax": "whoami",
            "examples": [
              {
                "cmd": "whoami",
                "out": "student"
              },
              {
                "cmd": "sudo whoami",
                "out": "root"
              }
            ]
          },
          {
            "name": "date",
            "purpose": "Display or format the current system date and time.",
            "syntax": "date [OPTION]... [+FORMAT]",
            "examples": [
              {
                "cmd": "date",
                "out": "Fri Nov 28 10:20:45 IST 2026"
              },
              {
                "cmd": "date '+%Y-%m-%d %H:%M:%S'",
                "out": "2026-11-28 10:20:45"
              }
            ]
          },
          {
            "name": "uptime",
            "purpose": "Show how long the system has been running, logged-in users, and CPU load averages.",
            "syntax": "uptime [OPTIONS]",
            "examples": [
              {
                "cmd": "uptime",
                "out": " 10:21:10 up 3 days, 4:12,  2 users,  load average: 0.15, 0.10, 0.08"
              },
              {
                "cmd": "uptime -p",
                "out": "up 3 days, 4 hours, 12 minutes"
              }
            ]
          },
          {
            "name": "df",
            "purpose": "Report filesystem disk space usage across mounted partitions.",
            "syntax": "df [OPTION]... [FILE]...",
            "examples": [
              {
                "cmd": "df -h",
                "out": "Filesystem      Size  Used Avail Use% Mounted on\n/dev/sda1        50G   18G   30G  38% /"
              },
              {
                "cmd": "df -hT /home",
                "out": "Filesystem     Type  Size  Used Avail Use% Mounted on\n/dev/sda2      ext4  200G   80G  110G  43% /home"
              }
            ]
          },
          {
            "name": "free",
            "purpose": "Display amount of free and used physical RAM and swap memory.",
            "syntax": "free [OPTIONS]",
            "examples": [
              {
                "cmd": "free -h",
                "out": "               total        used        free      shared  buff/cache   available\nMem:            15Gi       4.2Gi       6.8Gi       312Mi       4.5Gi        10Gi\nSwap:          2.0Gi          0B       2.0Gi"
              },
              {
                "cmd": "free -m",
                "out": "(Displays memory statistics in mebibytes)"
              }
            ]
          }
        ]
      },
      {
        "name": "Process Commands",
        "commands": [
          {
            "name": "ps",
            "purpose": "Report a snapshot of currently running processes and PIDs.",
            "syntax": "ps [OPTIONS]",
            "examples": [
              {
                "cmd": "ps aux",
                "out": "USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\nroot         1  0.0  0.1 169316 11200 ?        Ss   10:00   0:01 /sbin/init"
              },
              {
                "cmd": "ps -ef | grep bash",
                "out": "student   2410  2408  0 10:05 pts/0    00:00:00 -bash"
              }
            ]
          },
          {
            "name": "top",
            "purpose": "Real-time dynamic view of running processes, CPU, and memory usage.",
            "syntax": "top [OPTIONS]",
            "examples": [
              {
                "cmd": "top",
                "out": "(Opens interactive real-time process table; press q to quit, k to kill a PID)"
              },
              {
                "cmd": "top -u student",
                "out": "(Shows only processes owned by user 'student')"
              }
            ]
          },
          {
            "name": "htop",
            "purpose": "Interactive, color-coded process viewer (improved alternative to top; install via apt if absent).",
            "syntax": "htop [OPTIONS]",
            "examples": [
              {
                "cmd": "htop",
                "out": "(Opens full-screen visual CPU/RAM meters and process tree; F10 to quit)"
              },
              {
                "cmd": "htop -p 1234,5678",
                "out": "(Monitors only PIDs 1234 and 5678)"
              }
            ]
          },
          {
            "name": "kill",
            "purpose": "Send a signal (e.g., SIGTERM, SIGKILL) to terminate or control a process by PID.",
            "syntax": "kill [-SIGNAL] PID...",
            "danger": "Terminates running processes",
            "examples": [
              {
                "cmd": "kill 4120",
                "out": "(Sends SIGTERM (15) to gracefully stop PID 4120)"
              },
              {
                "cmd": "kill -9 4120",
                "out": "(Sends SIGKILL (9) to forcefully terminate unresponsive PID 4120)"
              }
            ]
          },
          {
            "name": "jobs",
            "purpose": "List active background and suspended jobs in the current shell session.",
            "syntax": "jobs [OPTIONS]",
            "examples": [
              {
                "cmd": "jobs -l",
                "out": "[1]+  4321 Stopped                 sleep 100\n[2]-  4350 Running                 ./server &"
              },
              {
                "cmd": "jobs",
                "out": "[1]+  Stopped                 vim notes.txt"
              }
            ]
          },
          {
            "name": "bg",
            "purpose": "Resume a suspended job in the background.",
            "syntax": "bg [%job_id]",
            "examples": [
              {
                "cmd": "bg %1",
                "out": "[1]+ sleep 100 &"
              },
              {
                "cmd": "bg",
                "out": "(Resumes the most recently suspended job in the background)"
              }
            ]
          },
          {
            "name": "fg",
            "purpose": "Bring a background or suspended job back to the foreground.",
            "syntax": "fg [%job_id]",
            "examples": [
              {
                "cmd": "fg %1",
                "out": "sleep 100 (Now running in foreground)"
              },
              {
                "cmd": "fg",
                "out": "(Brings the most recent background job to the foreground)"
              }
            ]
          }
        ]
      },
      {
        "name": "Permission Commands",
        "commands": [
          {
            "name": "chmod",
            "purpose": "Change file or directory access permissions (read, write, execute).",
            "syntax": "chmod [OPTIONS] MODE FILE...",
            "danger": "Modifies File Permissions",
            "examples": [
              {
                "cmd": "chmod +x disk_usage.sh",
                "out": "(Adds execute permission for owner, group, and others)"
              },
              {
                "cmd": "chmod 755 deploy.sh",
                "out": "(Sets rwxr-xr-x permissions: owner full, group/others read+exec)"
              }
            ]
          },
          {
            "name": "chown",
            "purpose": "Change file or directory owner and group.",
            "syntax": "chown [OPTIONS] OWNER[:GROUP] FILE...",
            "danger": "Sudo Required & Modifies Ownership",
            "examples": [
              {
                "cmd": "sudo chown student:student project.c",
                "out": "(Transfers ownership of project.c to user and group 'student')"
              },
              {
                "cmd": "sudo chown -R www-data:www-data /var/www/html",
                "out": "(Recursively updates ownership of web root directory)"
              }
            ]
          },
          {
            "name": "ls -l",
            "purpose": "Display long-format listing showing permission bits, link count, owner, group, size, and date.",
            "syntax": "ls -l [FILE]...",
            "examples": [
              {
                "cmd": "ls -l disk_usage.sh",
                "out": "-rwxr-xr-x 1 student student 1024 Nov 28 10:15 disk_usage.sh"
              },
              {
                "cmd": "ls -ld /etc",
                "out": "drwxr-xr-x 95 root root 4096 Nov 28 09:00 /etc"
              }
            ]
          }
        ]
      },
      {
        "name": "Searching and Filtering",
        "commands": [
          {
            "name": "grep",
            "purpose": "Search for text patterns inside files or command output using regular expressions.",
            "syntax": "grep [OPTIONS] PATTERN [FILE...]",
            "examples": [
              {
                "cmd": "grep -in 'pthread' *.c",
                "out": "producer_consumer.c:6:#include <pthread.h>"
              },
              {
                "cmd": "ps aux | grep python3",
                "out": "student  5120  0.2  0.4  32000 14000 pts/0 S+ 10:30 0:00 python3 app.py"
              }
            ]
          },
          {
            "name": "find",
            "purpose": "Search for files and directories in a directory hierarchy by name, type, size, or time.",
            "syntax": "find [PATH] [EXPRESSION]",
            "examples": [
              {
                "cmd": "find . -name '*.c'",
                "out": "./fcfs.c\n./sjf.c\n./bankers.c"
              },
              {
                "cmd": "find /var/log -type f -size +10M",
                "out": "/var/log/syslog.1"
              }
            ]
          },
          {
            "name": "sort",
            "purpose": "Sort lines of text files alphabetically, numerically, or in reverse.",
            "syntax": "sort [OPTION]... [FILE]...",
            "examples": [
              {
                "cmd": "sort names.txt",
                "out": "Alice\nBob\nCharlie"
              },
              {
                "cmd": "sort -nr scores.txt",
                "out": "98\n87\n74\n61"
              }
            ]
          },
          {
            "name": "wc",
            "purpose": "Count lines, words, characters, and bytes in a file or input stream.",
            "syntax": "wc [OPTION]... [FILE]...",
            "examples": [
              {
                "cmd": "wc -l fcfs.c",
                "out": "74 fcfs.c"
              },
              {
                "cmd": "wc notes.txt",
                "out": " 12  85 512 notes.txt"
              }
            ]
          },
          {
            "name": "cut",
            "purpose": "Extract specific columns or fields from delimited lines of text.",
            "syntax": "cut OPTION... [FILE]...",
            "examples": [
              {
                "cmd": "cut -d':' -f1,7 /etc/passwd | head -n 3",
                "out": "root:/bin/bash\ndaemon:/usr/sbin/nologin\nbin:/usr/sbin/nologin"
              },
              {
                "cmd": "cut -c1-10 log.txt",
                "out": "(Extracts first 10 characters of each line)"
              }
            ]
          },
          {
            "name": "diff",
            "purpose": "Compare two files line by line and show the differences.",
            "syntax": "diff [OPTION]... FILE1 FILE2",
            "examples": [
              {
                "cmd": "diff -u v1.c v2.c",
                "out": "--- v1.c\n+++ v2.c\n@@ -10,1 +10,1 @@\n-int tq = 2;\n+int tq = 4;"
              },
              {
                "cmd": "diff fileA.txt fileB.txt",
                "out": "3c3\n< Old Line\n---\n> New Line"
              }
            ]
          }
        ]
      },
      {
        "name": "Networking Basics",
        "commands": [
          {
            "name": "ip",
            "purpose": "Show and manipulate network interfaces, IP addresses, and routing tables.",
            "syntax": "ip [OPTIONS] OBJECT {COMMAND}",
            "examples": [
              {
                "cmd": "ip addr show",
                "out": "2: eth0: <BROADCAST,MULTICAST,UP> mtu 1500\n    inet 192.168.1.42/24 brd 192.168.1.255 scope global eth0"
              },
              {
                "cmd": "ip route",
                "out": "default via 192.168.1.1 dev eth0 proto dhcp"
              }
            ]
          },
          {
            "name": "ping",
            "purpose": "Send ICMP ECHO_REQUEST packets to test network reachability and latency.",
            "syntax": "ping [OPTIONS] DESTINATION",
            "examples": [
              {
                "cmd": "ping -c 3 8.8.8.8",
                "out": "3 packets transmitted, 3 received, 0% packet loss, time 2003ms\nrtt min/avg/max/mdev = 14.1/15.2/16.8/1.1 ms"
              },
              {
                "cmd": "ping -c 2 localhost",
                "out": "64 bytes from localhost (127.0.0.1): icmp_seq=1 ttl=64 time=0.042 ms"
              }
            ]
          },
          {
            "name": "hostname",
            "purpose": "Display system hostname or resolve local IP addresses.",
            "syntax": "hostname [OPTION]",
            "examples": [
              {
                "cmd": "hostname -f",
                "out": "ubuntu-lab.localdomain"
              },
              {
                "cmd": "hostname -i",
                "out": "127.0.1.1"
              }
            ]
          },
          {
            "name": "ss",
            "purpose": "Investigate active network sockets, listening TCP/UDP ports, and connections.",
            "syntax": "ss [OPTIONS]",
            "examples": [
              {
                "cmd": "ss -tuln",
                "out": "Netid State  Recv-Q Send-Q Local Address:Port Peer Address:Port\ntcp   LISTEN 0      128    0.0.0.0:22         0.0.0.0:*"
              },
              {
                "cmd": "ss -tp",
                "out": "(Lists established TCP connections with process names)"
              }
            ]
          },
          {
            "name": "curl",
            "purpose": "Transfer data from or to a server using HTTP, HTTPS, FTP, etc.",
            "syntax": "curl [OPTIONS] URL",
            "examples": [
              {
                "cmd": "curl -I https://example.com",
                "out": "HTTP/2 200 \ncontent-type: text/html; charset=UTF-8"
              },
              {
                "cmd": "curl -s https://api.github.com/zen",
                "out": "Speak like a human."
              }
            ]
          }
        ]
      },
      {
        "name": "Package and Help Commands",
        "commands": [
          {
            "name": "man",
            "purpose": "Display the system reference manual pages for commands, system calls, and libraries.",
            "syntax": "man [SECTION] NAME",
            "examples": [
              {
                "cmd": "man 2 fork",
                "out": "(Opens Linux Programmer's Manual Section 2 for the fork() system call)"
              },
              {
                "cmd": "man 3 pthread_create",
                "out": "(Opens manual Section 3 for POSIX thread creation API)"
              }
            ]
          },
          {
            "name": "--help",
            "purpose": "Standard GNU flag to print concise usage syntax and options to stdout.",
            "syntax": "command --help",
            "examples": [
              {
                "cmd": "grep --help",
                "out": "Usage: grep [OPTION]... PATTERNS [FILE]...\nSearch for PATTERNS in each FILE."
              },
              {
                "cmd": "gcc --help",
                "out": "(Displays summary of GNU C compiler options)"
              }
            ]
          },
          {
            "name": "apt",
            "purpose": "Debian/Ubuntu package manager for updating package lists and installing software.",
            "syntax": "sudo apt [COMMAND] [PACKAGE]",
            "danger": "Sudo / Root Privilege Required",
            "examples": [
              {
                "cmd": "sudo apt update && sudo apt install build-essential",
                "out": "(Updates package index and installs gcc, g++, make, and libc headers)"
              },
              {
                "cmd": "sudo apt install htop python3",
                "out": "(Installs htop monitor and Python 3 interpreter)"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "number": "PR-02",
    "title": "Study and Implement Disk Space Usage Information Utilities",
    "category": "utilities",
    "categoryLabel": "System Administration & Utilities",
    "type": "coding",
    "aim": "To study Linux filesystem organization and implement utilities in Bash, C, C++, and Python that inspect and report mounted filesystem disk space usage (total, used, available, usage percentage) similar to df -h, with customizable threshold warnings.",
    "shortDesc": "Inspect and report mounted disk space statistics, total/used/free capacity, and threshold usage alerts.",
    "topics": [
      "Linux VFS",
      "statvfs System Call",
      "shutil.disk_usage",
      "Shell Scripting df -h",
      "Disk Quota Alerting"
    ],
    "implCount": 4,
    "languages": [
      "bash",
      "c",
      "cpp",
      "python"
    ],
    "defaultLang": "bash",
    "linuxOnlyNote": "Requires Linux or WSL (Ubuntu) for the Bash shell script (df) and POSIX statvfs() system calls in C/C++. Python implementation works cross-platform.",
    "code": {
      "bash": {
        "filename": "disk_usage.sh",
        "langLabel": "Bash Shell Script",
        "source": "#!/bin/bash\n# ==============================================================================\n# Practical 02: Disk Space Usage Monitoring Script\n# Inspects mounted filesystems and alerts if usage exceeds threshold (default 80%)\n# Usage: ./disk_usage.sh [threshold_percent]\n# ==============================================================================\n\nTHRESHOLD=${1:-80}\n\necho \"=================================================================\"\necho \"       SYSTEM DISK SPACE USAGE REPORT - $(date '+%Y-%m-%d %H:%M:%S')\"\necho \"       Warning Threshold: ${THRESHOLD}%\"\necho \"=================================================================\"\nprintf \"%-22s %-8s %-8s %-8s %-6s %-14s %s\\n\" \"Filesystem\" \"Size\" \"Used\" \"Avail\" \"Use%\" \"Mounted on\" \"Status\"\necho \"-----------------------------------------------------------------\"\n\ndf -h -x tmpfs -x devtmpfs -x squashfs 2>/dev/null | tail -n +2 | while read -r line; do\n    fs=$(echo \"$line\" | awk '{print $1}')\n    size=$(echo \"$line\" | awk '{print $2}')\n    used=$(echo \"$line\" | awk '{print $3}')\n    avail=$(echo \"$line\" | awk '{print $4}')\n    use_pct=$(echo \"$line\" | awk '{print $5}')\n    mount_point=$(echo \"$line\" | awk '{print $6}')\n\n    usage_num=${use_pct%\\%}\n\n    if [ -n \"$usage_num\" ] && [ \"$usage_num\" -ge \"$THRESHOLD\" ] 2>/dev/null; then\n        status=\"[WARNING >= ${THRESHOLD}%]\"\n    else\n        status=\"[NORMAL]\"\n    fi\n\n    printf \"%-22s %-8s %-8s %-8s %-6s %-14s %s\\n\" \"$fs\" \"$size\" \"$used\" \"$avail\" \"$use_pct\" \"$mount_point\" \"$status\"\ndone\n\necho \"=================================================================\"\necho \"Report generation completed.\"\n",
        "compileCmd": "chmod +x disk_usage.sh",
        "runCmd": "./disk_usage.sh 80",
        "sampleInputs": [
          {
            "desc": "Run with default 80% warning threshold",
            "input": "./disk_usage.sh"
          },
          {
            "desc": "Run with custom 45% warning threshold",
            "input": "./disk_usage.sh 45"
          }
        ],
        "sampleOutputs": [
          {
            "desc": "Output with default 80% threshold on Ubuntu/WSL",
            "output": "=================================================================\n       SYSTEM DISK SPACE USAGE REPORT - 2026-11-28 10:15:00\n       Warning Threshold: 80%\n=================================================================\nFilesystem             Size     Used     Avail    Use%   Mounted on     Status\n-----------------------------------------------------------------\n/dev/sda1              50G      18G      30G      38%    /              [NORMAL]\n/dev/sdb1              200G     172G     18G      91%    /data          [WARNING >= 80%]\n/dev/nvme0n1p2         450G     210G     217G     50%    /home          [NORMAL]\n=================================================================\nReport generation completed."
          },
          {
            "desc": "Output with 45% threshold triggering warning on /home",
            "output": "/dev/nvme0n1p2         450G     210G     217G     50%    /home          [WARNING >= 45%]"
          }
        ]
      },
      "c": {
        "filename": "disk_usage.c",
        "langLabel": "C (POSIX statvfs)",
        "source": "/*\n * Practical 02: Disk Space Usage Utility in C\n * Uses POSIX statvfs() system call to query actual filesystem statistics.\n * Compile: gcc -Wall -Wextra disk_usage.c -o disk_usage\n * Run:     ./disk_usage / 80.0\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <sys/statvfs.h>\n\nvoid print_disk_usage(const char *path, double threshold) {\n    struct statvfs stat;\n\n    if (statvfs(path, &stat) != 0) {\n        perror(\"statvfs() error\");\n        return;\n    }\n\n    unsigned long long total_bytes = (unsigned long long)stat.f_blocks * stat.f_frsize;\n    unsigned long long avail_bytes = (unsigned long long)stat.f_bavail * stat.f_frsize;\n    unsigned long long free_root   = (unsigned long long)stat.f_bfree  * stat.f_frsize;\n    unsigned long long used_bytes  = total_bytes - free_root;\n\n    double total_gb = (double)total_bytes / (1024.0 * 1024.0 * 1024.0);\n    double used_gb  = (double)used_bytes  / (1024.0 * 1024.0 * 1024.0);\n    double avail_gb = (double)avail_bytes / (1024.0 * 1024.0 * 1024.0);\n    double used_pct = (total_bytes > 0) ? ((double)used_bytes / (double)total_bytes) * 100.0 : 0.0;\n\n    printf(\"\\n--- Disk Usage Report for: %s ---\\n\", path);\n    printf(\"Total Capacity   : %.2f GB (%llu bytes)\\n\", total_gb, total_bytes);\n    printf(\"Used Space       : %.2f GB (%llu bytes)\\n\", used_gb, used_bytes);\n    printf(\"Available Space  : %.2f GB (%llu bytes)\\n\", avail_gb, avail_bytes);\n    printf(\"Usage Percentage : %.2f%%\\n\", used_pct);\n\n    if (used_pct >= threshold) {\n        printf(\">>> [ALERT] Usage exceeds warning threshold of %.1f%%!\\n\", threshold);\n    } else {\n        printf(\">>> [STATUS] Disk utilization is within safe limits (< %.1f%%).\\n\", threshold);\n    }\n}\n\nint main(int argc, char *argv[]) {\n    const char *target_path = \"/\";\n    double threshold = 80.0;\n\n    if (argc >= 2) target_path = argv[1];\n    if (argc >= 3) threshold = atof(argv[2]);\n\n    printf(\"========================================================\\n\");\n    printf(\"         POSIX C DISK SPACE MONITORING UTILITY          \\n\");\n    printf(\"========================================================\\n\");\n    print_disk_usage(target_path, threshold);\n    printf(\"========================================================\\n\");\n    return 0;\n}\n",
        "compileCmd": "gcc -Wall -Wextra disk_usage.c -o disk_usage",
        "runCmd": "./disk_usage / 80.0",
        "sampleInputs": [
          {
            "desc": "Inspect root partition with 80% threshold",
            "input": "./disk_usage / 80.0"
          },
          {
            "desc": "Inspect /home directory with 40% threshold",
            "input": "./disk_usage /home 40.0"
          }
        ],
        "sampleOutputs": [
          {
            "desc": "Execution output for root partition (/)",
            "output": "--- Disk Usage Report for: / ---\nTotal Capacity   : 100.00 GB (107374182400 bytes)\nUsed Space       : 42.50 GB (45634027520 bytes)\nAvailable Space  : 57.50 GB (61740154880 bytes)\nUsage Percentage : 42.50%\n>>> [STATUS] Disk utilization is within safe limits (< 80.0%)."
          },
          {
            "desc": "Execution triggering threshold alert",
            "output": "--- Disk Usage Report for: /home ---\nUsage Percentage : 42.50%\n>>> [ALERT] Usage exceeds warning threshold of 40.0%!"
          }
        ]
      },
      "cpp": {
        "filename": "disk_usage.cpp",
        "langLabel": "C++ (OOP & statvfs)",
        "source": "/*\n * Practical 02: Disk Space Usage Utility in C++\n * Object-oriented wrapper around Linux POSIX statvfs() system call.\n * Compile: g++ -std=c++17 -Wall -Wextra disk_usage.cpp -o disk_usage_cpp\n * Run:     ./disk_usage_cpp / 75.0\n */\n#include <iostream>\n#include <iomanip>\n#include <string>\n#include <vector>\n#include <cstdint>\n#include <sys/statvfs.h>\n\nclass DiskMonitor {\nprivate:\n    std::string mountPath;\n    double thresholdPercent;\n\npublic:\n    DiskMonitor(std::string path, double threshold = 80.0)\n        : mountPath(std::move(path)), thresholdPercent(threshold) {}\n\n    bool inspectUsage() const {\n        struct statvfs stat{};\n        if (statvfs(mountPath.c_str(), &stat) != 0) {\n            std::cerr << \"Error querying filesystem path: \" << mountPath << \"\\n\";\n            return false;\n        }\n\n        uint64_t totalBytes = static_cast<uint64_t>(stat.f_blocks) * stat.f_frsize;\n        uint64_t freeRoot   = static_cast<uint64_t>(stat.f_bfree)  * stat.f_frsize;\n        uint64_t availBytes = static_cast<uint64_t>(stat.f_bavail) * stat.f_frsize;\n        uint64_t usedBytes  = totalBytes - freeRoot;\n\n        double totalGB = static_cast<double>(totalBytes) / (1024.0 * 1024.0 * 1024.0);\n        double usedGB  = static_cast<double>(usedBytes)  / (1024.0 * 1024.0 * 1024.0);\n        double availGB = static_cast<double>(availBytes) / (1024.0 * 1024.0 * 1024.0);\n        double usedPct = (totalBytes > 0) ? (static_cast<double>(usedBytes) / totalBytes) * 100.0 : 0.0;\n\n        std::cout << std::fixed << std::setprecision(2);\n        std::cout << \"\\n-----------------------------------------------------\\n\";\n        std::cout << \"Mount Point Target : \" << mountPath << \"\\n\";\n        std::cout << \"Total Size         : \" << totalGB << \" GB\\n\";\n        std::cout << \"Used Space         : \" << usedGB << \" GB (\" << usedPct << \"%)\\n\";\n        std::cout << \"Available Space    : \" << availGB << \" GB\\n\";\n\n        if (usedPct >= thresholdPercent) {\n            std::cout << \"STATUS             : [HIGH USAGE ALERT >= \" << thresholdPercent << \"%]\\n\";\n        } else {\n            std::cout << \"STATUS             : [HEALTHY OK]\\n\";\n        }\n        std::cout << \"-----------------------------------------------------\\n\";\n        return true;\n    }\n};\n\nint main(int argc, char* argv[]) {\n    std::vector<std::string> paths = {\"/\", \"/home\"};\n    double threshold = 75.0;\n\n    if (argc >= 2) {\n        paths.clear();\n        paths.emplace_back(argv[1]);\n    }\n    if (argc >= 3) {\n        threshold = std::stod(argv[2]);\n    }\n\n    for (const auto& p : paths) {\n        DiskMonitor monitor(p, threshold);\n        monitor.inspectUsage();\n    }\n    return 0;\n}\n",
        "compileCmd": "g++ -std=c++17 -Wall -Wextra disk_usage.cpp -o disk_usage_cpp",
        "runCmd": "./disk_usage_cpp / 75.0",
        "sampleInputs": [
          {
            "desc": "Inspect default paths (/ and /home)",
            "input": "./disk_usage_cpp"
          },
          {
            "desc": "Inspect single target with 85% threshold",
            "input": "./disk_usage_cpp /mnt/data 85.0"
          }
        ],
        "sampleOutputs": [
          {
            "desc": "Output for default system paths",
            "output": "Mount Point Target : /\nTotal Size         : 120.50 GB\nUsed Space         : 48.20 GB (40.00%)\nAvailable Space    : 72.30 GB\nSTATUS             : [HEALTHY OK]"
          },
          {
            "desc": "Output for single custom directory",
            "output": "Mount Point Target : /mnt/data\nTotal Size         : 500.00 GB\nUsed Space         : 150.00 GB (30.00%)\nAvailable Space    : 350.00 GB\nSTATUS             : [HEALTHY OK]"
          }
        ]
      },
      "python": {
        "filename": "disk_usage.py",
        "langLabel": "Python (shutil.disk_usage)",
        "source": "#!/usr/bin/env python3\n\"\"\"\nPractical 02: Disk Space Usage Utility in Python\nCross-platform implementation using standard library `shutil.disk_usage()`.\nRun: python3 disk_usage.py / 80.0\n\"\"\"\nimport os\nimport sys\nimport shutil\n\ndef format_gb(bytes_val):\n    return f\"{bytes_val / (1024 ** 3):.2f} GB\"\n\ndef check_disk_usage(path=\"/\", threshold=80.0):\n    if not os.path.exists(path):\n        print(f\"[Error] Specified filesystem path '{path}' does not exist.\")\n        return\n\n    total, used, free = shutil.disk_usage(path)\n    used_pct = (used / total) * 100.0 if total > 0 else 0.0\n    free_pct = (free / total) * 100.0 if total > 0 else 0.0\n\n    print(\"=\" * 60)\n    print(f\"      DISK SPACE USAGE ANALYSIS - Target: {path}\")\n    print(\"=\" * 60)\n    print(f\"Total Capacity     : {format_gb(total):>12}\")\n    print(f\"Used Space         : {format_gb(used):>12} ({used_pct:.1f}%)\")\n    print(f\"Free / Available   : {format_gb(free):>12} ({free_pct:.1f}%)\")\n    print(\"-\" * 60)\n\n    total_blocks = 25\n    filled_blocks = int(round((used_pct / 100.0) * total_blocks))\n    bar = \"[\" + \"#\" * filled_blocks + \"-\" * (total_blocks - filled_blocks) + \"]\"\n    print(f\"Utilization Bar    : {bar} {used_pct:.1f}%\")\n\n    if used_pct >= threshold:\n        print(f\"\\n>>> [ALERT] Disk usage {used_pct:.1f}% exceeds warning threshold of {threshold}%!\")\n    else:\n        print(f\"\\n>>> [STATUS] Disk usage is within safe thresholds (< {threshold}%).\")\n    print(\"=\" * 60)\n\ndef main():\n    target = \"/\" if len(sys.argv) < 2 else sys.argv[1]\n    threshold = 80.0 if len(sys.argv) < 3 else float(sys.argv[2])\n    check_disk_usage(target, threshold)\n\nif __name__ == \"__main__\":\n    main()\n",
        "compileCmd": "python3 -m py_compile disk_usage.py",
        "runCmd": "python3 disk_usage.py / 80.0",
        "sampleInputs": [
          {
            "desc": "Check root filesystem with 80% threshold",
            "input": "python3 disk_usage.py / 80.0"
          },
          {
            "desc": "Check with 30% threshold to verify alert",
            "input": "python3 disk_usage.py / 30.0"
          }
        ],
        "sampleOutputs": [
          {
            "desc": "Standard disk usage report",
            "output": "Total Capacity     :    120.00 GB\nUsed Space         :     38.40 GB (32.0%)\nFree / Available   :     81.60 GB (68.0%)\nUtilization Bar    : [########-----------------] 32.0%\n>>> [STATUS] Disk usage is within safe thresholds (< 80.0%)."
          },
          {
            "desc": "Alert triggered at 30% threshold",
            "output": "Utilization Bar    : [########-----------------] 32.0%\n>>> [ALERT] Disk usage 32.0% exceeds warning threshold of 30.0%!"
          }
        ]
      }
    }
  },
  {
    "id": 3,
    "number": "PR-03",
    "title": "CPU Process Scheduling Algorithms (FCFS, SJF, Round Robin)",
    "category": "scheduling",
    "categoryLabel": "CPU Scheduling",
    "type": "coding_multi",
    "aim": "To implement and compare CPU process scheduling algorithms — First Come First Serve (FCFS), Shortest Job First (SJF - Non-Preemptive), and Round Robin (RR - Preemptive) — by computing Completion Time, Turnaround Time, Waiting Time, and their averages.",
    "shortDesc": "Implement FCFS, SJF, Round Robin, and a combined menu-driven CPU scheduler in C, C++, and Python.",
    "topics": [
      "FCFS",
      "Shortest Job First (SJF)",
      "Round Robin",
      "Turnaround Time",
      "Waiting Time",
      "Menu-Driven Comparison"
    ],
    "implCount": 12,
    "languages": [
      "c",
      "cpp",
      "python"
    ],
    "defaultLang": "c",
    "algorithms": [
      {
        "key": "fcfs",
        "label": "FCFS Standalone"
      },
      {
        "key": "sjf",
        "label": "SJF Standalone"
      },
      {
        "key": "rr",
        "label": "Round Robin Standalone"
      },
      {
        "key": "combined",
        "label": "Combined Menu Program"
      }
    ],
    "defaultAlgo": "fcfs",
    "code": {
      "c": {
        "fcfs": {
          "filename": "fcfs.c",
          "langLabel": "C (GCC)",
          "source": "/*\n * Practical 03 (C - FCFS Standalone): First Come First Serve CPU Scheduling\n * Compile: gcc -Wall fcfs.c -o fcfs\n * Run:     ./fcfs\n */\n#include <stdio.h>\n\ntypedef struct {\n    int pid, arrival, burst, completion, turnaround, waiting;\n} Process;\n\nint main() {\n    int n, i, j;\n    printf(\"Enter number of processes: \");\n    if (scanf(\"%d\", &n) != 1 || n <= 0) return 1;\n\n    Process p[100], temp;\n    for (i = 0; i < n; i++) {\n        printf(\"Enter Process ID, Arrival Time, Burst Time for P%d: \", i + 1);\n        scanf(\"%d %d %d\", &p[i].pid, &p[i].arrival, &p[i].burst);\n    }\n\n    for (i = 0; i < n - 1; i++) {\n        for (j = 0; j < n - i - 1; j++) {\n            if (p[j].arrival > p[j + 1].arrival ||\n               (p[j].arrival == p[j + 1].arrival && p[j].pid > p[j + 1].pid)) {\n                temp = p[j]; p[j] = p[j + 1]; p[j + 1] = temp;\n            }\n        }\n    }\n\n    int cur = 0;\n    double total_tat = 0, total_wt = 0;\n    for (i = 0; i < n; i++) {\n        if (cur < p[i].arrival) cur = p[i].arrival;\n        p[i].completion = cur + p[i].burst;\n        p[i].turnaround = p[i].completion - p[i].arrival;\n        p[i].waiting    = p[i].turnaround - p[i].burst;\n        cur = p[i].completion;\n        total_tat += p[i].turnaround;\n        total_wt  += p[i].waiting;\n    }\n\n    printf(\"\\n--- FCFS Scheduling Result ---\\nPID\\tAT\\tBT\\tCT\\tTAT\\tWT\\n\");\n    for (i = 0; i < n; i++) {\n        printf(\"P%d\\t%d\\t%d\\t%d\\t%d\\t%d\\n\", p[i].pid, p[i].arrival, p[i].burst,\n               p[i].completion, p[i].turnaround, p[i].waiting);\n    }\n    printf(\"\\nAverage Turnaround Time: %.2f\\nAverage Waiting Time   : %.2f\\n\",\n           total_tat / n, total_wt / n);\n    return 0;\n}\n",
          "compileCmd": "gcc -Wall fcfs.c -o fcfs",
          "runCmd": "./fcfs",
          "sampleInputs": [
            {
              "desc": "Test Case 1: 4 processes arriving sequentially (0, 1, 2, 3)",
              "input": "4\n1 0 5\n2 1 3\n3 2 8\n4 3 6"
            },
            {
              "desc": "Test Case 2: 3 processes with CPU idle gap",
              "input": "3\n1 0 4\n2 6 3\n3 7 2"
            }
          ],
          "sampleOutputs": [
            {
              "desc": "Expected FCFS Output (Test Case 1)",
              "output": "--- FCFS Scheduling Result ---\nPID\tAT\tBT\tCT\tTAT\tWT\nP1\t0\t5\t5\t5\t0\nP2\t1\t3\t8\t7\t4\nP3\t2\t8\t16\t14\t6\nP4\t3\t6\t22\t19\t13\n\nAverage Turnaround Time: 11.25\nAverage Waiting Time   : 5.75"
            },
            {
              "desc": "Expected FCFS Output (Test Case 2)",
              "output": "--- FCFS Scheduling Result ---\nPID\tAT\tBT\tCT\tTAT\tWT\nP1\t0\t4\t4\t4\t0\nP2\t6\t3\t9\t3\t0\nP3\t7\t2\t11\t4\t2\n\nAverage Turnaround Time: 3.67\nAverage Waiting Time   : 0.67"
            }
          ]
        },
        "sjf": {
          "filename": "sjf.c",
          "langLabel": "C (GCC)",
          "source": "/*\n * Practical 03 (C - SJF Standalone): Non-Preemptive Shortest Job First\n * Compile: gcc -Wall sjf.c -o sjf\n * Run:     ./sjf\n */\n#include <stdio.h>\n#include <limits.h>\n\ntypedef struct {\n    int pid, arrival, burst, completion, turnaround, waiting, done;\n} Process;\n\nint main() {\n    int n, i;\n    printf(\"Enter number of processes: \");\n    if (scanf(\"%d\", &n) != 1 || n <= 0) return 1;\n\n    Process p[100];\n    for (i = 0; i < n; i++) {\n        printf(\"Enter Process ID, Arrival Time, Burst Time for P%d: \", i + 1);\n        scanf(\"%d %d %d\", &p[i].pid, &p[i].arrival, &p[i].burst);\n        p[i].done = 0;\n    }\n\n    int completed = 0, cur = 0;\n    double total_tat = 0, total_wt = 0;\n    while (completed < n) {\n        int idx = -1, min_bt = INT_MAX;\n        for (i = 0; i < n; i++) {\n            if (!p[i].done && p[i].arrival <= cur) {\n                if (p[i].burst < min_bt || (p[i].burst == min_bt && p[i].arrival < p[idx].arrival)) {\n                    min_bt = p[i].burst; idx = i;\n                }\n            }\n        }\n        if (idx == -1) cur++;\n        else {\n            p[idx].completion = cur + p[idx].burst;\n            p[idx].turnaround = p[idx].completion - p[idx].arrival;\n            p[idx].waiting    = p[idx].turnaround - p[idx].burst;\n            p[idx].done = 1;\n            cur = p[idx].completion;\n            completed++;\n            total_tat += p[idx].turnaround;\n            total_wt  += p[idx].waiting;\n        }\n    }\n\n    printf(\"\\n--- SJF (Non-Preemptive) Scheduling Result ---\\nPID\\tAT\\tBT\\tCT\\tTAT\\tWT\\n\");\n    for (i = 0; i < n; i++) {\n        printf(\"P%d\\t%d\\t%d\\t%d\\t%d\\t%d\\n\", p[i].pid, p[i].arrival, p[i].burst,\n               p[i].completion, p[i].turnaround, p[i].waiting);\n    }\n    printf(\"\\nAverage Turnaround Time: %.2f\\nAverage Waiting Time   : %.2f\\n\",\n           total_tat / n, total_wt / n);\n    return 0;\n}\n",
          "compileCmd": "gcc -Wall sjf.c -o sjf",
          "runCmd": "./sjf",
          "sampleInputs": [
            {
              "desc": "Test Case 1: 4 processes (same dataset as FCFS for comparison)",
              "input": "4\n1 0 5\n2 1 3\n3 2 8\n4 3 6"
            },
            {
              "desc": "Test Case 2: 4 processes arriving at time 0",
              "input": "4\n1 0 6\n2 0 8\n3 0 7\n4 0 3"
            }
          ],
          "sampleOutputs": [
            {
              "desc": "Expected SJF Output (Test Case 1)",
              "output": "--- SJF (Non-Preemptive) Scheduling Result ---\nPID\tAT\tBT\tCT\tTAT\tWT\nP1\t0\t5\t5\t5\t0\nP2\t1\t3\t8\t7\t4\nP3\t2\t8\t22\t20\t12\nP4\t3\t6\t14\t11\t5\n\nAverage Turnaround Time: 10.75\nAverage Waiting Time   : 5.25"
            },
            {
              "desc": "Expected SJF Output (Test Case 2)",
              "output": "--- SJF (Non-Preemptive) Scheduling Result ---\nPID\tAT\tBT\tCT\tTAT\tWT\nP1\t0\t6\t9\t9\t3\nP2\t0\t8\t24\t24\t16\nP3\t0\t7\t16\t16\t9\nP4\t0\t3\t3\t3\t0\n\nAverage Turnaround Time: 13.00\nAverage Waiting Time   : 7.00"
            }
          ]
        },
        "rr": {
          "filename": "round_robin.c",
          "langLabel": "C (GCC)",
          "source": "/*\n * Practical 03 (C - Round Robin Standalone): Preemptive Round Robin Scheduling\n * Compile: gcc -Wall round_robin.c -o round_robin\n * Run:     ./round_robin\n */\n#include <stdio.h>\n\ntypedef struct {\n    int pid, arrival, burst, remaining, completion, turnaround, waiting, in_queue;\n} Process;\n\nint main() {\n    int n, tq, i;\n    printf(\"Enter number of processes: \");\n    if (scanf(\"%d\", &n) != 1 || n <= 0) return 1;\n\n    Process p[100];\n    for (i = 0; i < n; i++) {\n        printf(\"Enter Process ID, Arrival Time, Burst Time for P%d: \", i + 1);\n        scanf(\"%d %d %d\", &p[i].pid, &p[i].arrival, &p[i].burst);\n        p[i].remaining = p[i].burst;\n        p[i].in_queue = 0;\n    }\n    printf(\"Enter Time Quantum: \");\n    if (scanf(\"%d\", &tq) != 1 || tq <= 0) return 1;\n\n    int queue[1000], front = 0, rear = 0, cur = p[0].arrival, completed = 0;\n    for (i = 1; i < n; i++) if (p[i].arrival < cur) cur = p[i].arrival;\n    for (i = 0; i < n; i++) if (p[i].arrival <= cur && !p[i].in_queue) { queue[rear++] = i; p[i].in_queue = 1; }\n\n    double total_tat = 0, total_wt = 0;\n    while (completed < n) {\n        if (front == rear) {\n            cur++;\n            for (i = 0; i < n; i++)\n                if (p[i].arrival <= cur && p[i].remaining > 0 && !p[i].in_queue) { queue[rear++] = i; p[i].in_queue = 1; }\n            continue;\n        }\n        int idx = queue[front++];\n        int exec = (p[idx].remaining > tq) ? tq : p[idx].remaining;\n        p[idx].remaining -= exec; cur += exec;\n        for (i = 0; i < n; i++)\n            if (p[i].arrival <= cur && p[i].remaining > 0 && !p[i].in_queue) { queue[rear++] = i; p[i].in_queue = 1; }\n        if (p[idx].remaining == 0) {\n            p[idx].completion = cur;\n            p[idx].turnaround = p[idx].completion - p[idx].arrival;\n            p[idx].waiting    = p[idx].turnaround - p[idx].burst;\n            total_tat += p[idx].turnaround;\n            total_wt  += p[idx].waiting;\n            completed++;\n        } else queue[rear++] = idx;\n    }\n\n    printf(\"\\n--- Round Robin (TQ = %d) Scheduling Result ---\\nPID\\tAT\\tBT\\tCT\\tTAT\\tWT\\n\", tq);\n    for (i = 0; i < n; i++) {\n        printf(\"P%d\\t%d\\t%d\\t%d\\t%d\\t%d\\n\", p[i].pid, p[i].arrival, p[i].burst,\n               p[i].completion, p[i].turnaround, p[i].waiting);\n    }\n    printf(\"\\nAverage Turnaround Time: %.2f\\nAverage Waiting Time   : %.2f\\n\",\n           total_tat / n, total_wt / n);\n    return 0;\n}\n",
          "compileCmd": "gcc -Wall round_robin.c -o round_robin",
          "runCmd": "./round_robin",
          "sampleInputs": [
            {
              "desc": "Test Case 1: 4 processes with Time Quantum = 2",
              "input": "4\n1 0 5\n2 1 3\n3 2 8\n4 3 6\n2"
            },
            {
              "desc": "Test Case 2: 3 processes arriving at time 0 with Time Quantum = 4",
              "input": "3\n1 0 10\n2 0 5\n3 0 8\n4"
            }
          ],
          "sampleOutputs": [
            {
              "desc": "Expected Round Robin Output (Test Case 1, TQ=2)",
              "output": "--- Round Robin (TQ = 2) Scheduling Result ---\nPID\tAT\tBT\tCT\tTAT\tWT\nP1\t0\t5\t17\t17\t12\nP2\t1\t3\t11\t10\t7\nP3\t2\t8\t22\t20\t12\nP4\t3\t6\t20\t17\t11\n\nAverage Turnaround Time: 16.00\nAverage Waiting Time   : 10.50"
            },
            {
              "desc": "Expected Round Robin Output (Test Case 2, TQ=4)",
              "output": "--- Round Robin (TQ = 4) Scheduling Result ---\nPID\tAT\tBT\tCT\tTAT\tWT\nP1\t0\t10\t23\t23\t13\nP2\t0\t5\t17\t17\t12\nP3\t0\t8\t21\t21\t13\n\nAverage Turnaround Time: 20.33\nAverage Waiting Time   : 12.67"
            }
          ]
        },
        "combined": {
          "filename": "scheduler_menu.c",
          "langLabel": "C (GCC)",
          "source": "/*\n * Practical 03 (C - Combined Menu-Driven): FCFS, SJF, Round Robin\n * Compile: gcc -Wall scheduler_menu.c -o scheduler_menu\n * Run:     ./scheduler_menu\n */\n#include <stdio.h>\n#include <limits.h>\n\ntypedef struct {\n    int pid, arrival, burst, remaining, completion, turnaround, waiting, done, in_queue;\n} Process;\n\nvoid print_table(Process p[], int n, const char *title) {\n    double total_tat = 0, total_wt = 0;\n    printf(\"\\n--- %s ---\\nPID\\tAT\\tBT\\tCT\\tTAT\\tWT\\n\", title);\n    for (int i = 0; i < n; i++) {\n        printf(\"P%d\\t%d\\t%d\\t%d\\t%d\\t%d\\n\", p[i].pid, p[i].arrival, p[i].burst,\n               p[i].completion, p[i].turnaround, p[i].waiting);\n        total_tat += p[i].turnaround; total_wt += p[i].waiting;\n    }\n    printf(\"Average Turnaround Time: %.2f\\nAverage Waiting Time   : %.2f\\n\", total_tat / n, total_wt / n);\n}\n\nvoid run_fcfs(Process orig[], int n) {\n    Process p[100], t;\n    for (int i = 0; i < n; i++) p[i] = orig[i];\n    for (int i = 0; i < n - 1; i++)\n        for (int j = 0; j < n - i - 1; j++)\n            if (p[j].arrival > p[j + 1].arrival || (p[j].arrival == p[j + 1].arrival && p[j].pid > p[j + 1].pid)) {\n                t = p[j]; p[j] = p[j + 1]; p[j + 1] = t;\n            }\n    int cur = 0;\n    for (int i = 0; i < n; i++) {\n        if (cur < p[i].arrival) cur = p[i].arrival;\n        p[i].completion = cur + p[i].burst;\n        p[i].turnaround = p[i].completion - p[i].arrival;\n        p[i].waiting    = p[i].turnaround - p[i].burst;\n        cur = p[i].completion;\n    }\n    print_table(p, n, \"FCFS Scheduling\");\n}\n\nvoid run_sjf(Process orig[], int n) {\n    Process p[100];\n    for (int i = 0; i < n; i++) { p[i] = orig[i]; p[i].done = 0; }\n    int completed = 0, cur = 0;\n    while (completed < n) {\n        int idx = -1, min_bt = INT_MAX;\n        for (int i = 0; i < n; i++)\n            if (!p[i].done && p[i].arrival <= cur && (p[i].burst < min_bt || (p[i].burst == min_bt && p[i].arrival < p[idx].arrival))) {\n                min_bt = p[i].burst; idx = i;\n            }\n        if (idx == -1) cur++;\n        else {\n            p[idx].completion = cur + p[idx].burst;\n            p[idx].turnaround = p[idx].completion - p[idx].arrival;\n            p[idx].waiting    = p[idx].turnaround - p[idx].burst;\n            p[idx].done = 1; cur = p[idx].completion; completed++;\n        }\n    }\n    print_table(p, n, \"SJF (Non-Preemptive) Scheduling\");\n}\n\nvoid run_rr(Process orig[], int n, int tq) {\n    Process p[100];\n    int queue[1000], front = 0, rear = 0, earliest = orig[0].arrival;\n    for (int i = 0; i < n; i++) {\n        p[i] = orig[i]; p[i].remaining = p[i].burst; p[i].in_queue = 0;\n        if (p[i].arrival < earliest) earliest = p[i].arrival;\n    }\n    int cur = earliest, completed = 0;\n    for (int i = 0; i < n; i++) if (p[i].arrival <= cur && !p[i].in_queue) { queue[rear++] = i; p[i].in_queue = 1; }\n    while (completed < n) {\n        if (front == rear) {\n            cur++;\n            for (int i = 0; i < n; i++)\n                if (p[i].arrival <= cur && p[i].remaining > 0 && !p[i].in_queue) { queue[rear++] = i; p[i].in_queue = 1; }\n            continue;\n        }\n        int idx = queue[front++], exec = (p[idx].remaining > tq) ? tq : p[idx].remaining;\n        p[idx].remaining -= exec; cur += exec;\n        for (int i = 0; i < n; i++)\n            if (p[i].arrival <= cur && p[i].remaining > 0 && !p[i].in_queue) { queue[rear++] = i; p[i].in_queue = 1; }\n        if (p[idx].remaining == 0) {\n            p[idx].completion = cur; p[idx].turnaround = p[idx].completion - p[idx].arrival;\n            p[idx].waiting = p[idx].turnaround - p[idx].burst; completed++;\n        } else queue[rear++] = idx;\n    }\n    print_table(p, n, \"Round Robin Scheduling\");\n}\n\nint main() {\n    int n, choice, tq;\n    Process p[100];\n    printf(\"Enter number of processes: \");\n    if (scanf(\"%d\", &n) != 1 || n <= 0) return 1;\n    for (int i = 0; i < n; i++) {\n        printf(\"Enter Process ID, Arrival Time, Burst Time for P%d: \", i + 1);\n        scanf(\"%d %d %d\", &p[i].pid, &p[i].arrival, &p[i].burst);\n    }\n    do {\n        printf(\"\\n=== CPU SCHEDULER MENU ===\\n1. FCFS\\n2. SJF\\n3. Round Robin\\n4. Exit\\nEnter choice: \");\n        if (scanf(\"%d\", &choice) != 1) break;\n        if (choice == 1) run_fcfs(p, n);\n        else if (choice == 2) run_sjf(p, n);\n        else if (choice == 3) { printf(\"Enter Time Quantum: \"); scanf(\"%d\", &tq); if (tq > 0) run_rr(p, n, tq); }\n    } while (choice != 4);\n    return 0;\n}\n",
          "compileCmd": "gcc -Wall scheduler_menu.c -o scheduler_menu",
          "runCmd": "./scheduler_menu",
          "sampleInputs": [
            {
              "desc": "Test Case 1: Compare FCFS (1), SJF (2), Round Robin TQ=2 (3), Exit (4)",
              "input": "4\n1 0 5\n2 1 3\n3 2 8\n4 3 6\n1\n2\n3\n2\n4"
            },
            {
              "desc": "Test Case 2: Compare on 3 equal-arrival processes (TQ=3)",
              "input": "3\n1 0 7\n2 0 4\n3 0 9\n1\n2\n3\n3\n4"
            }
          ],
          "sampleOutputs": [
            {
              "desc": "Expected Combined Comparison Output (Test Case 1)",
              "output": "--- FCFS Scheduling ---\nAverage Turnaround Time: 11.25\nAverage Waiting Time   : 5.75\n\n--- SJF (Non-Preemptive) Scheduling ---\nAverage Turnaround Time: 10.75\nAverage Waiting Time   : 5.25\n\n--- Round Robin Scheduling ---\nAverage Turnaround Time: 16.00\nAverage Waiting Time   : 10.50"
            },
            {
              "desc": "Expected Combined Comparison Output (Test Case 2)",
              "output": "--- FCFS Scheduling ---\nAverage Turnaround Time: 12.67\nAverage Waiting Time   : 6.00\n\n--- SJF (Non-Preemptive) Scheduling ---\nAverage Turnaround Time: 11.67\nAverage Waiting Time   : 5.00\n\n--- Round Robin Scheduling ---\nAverage Turnaround Time: 16.00\nAverage Waiting Time   : 9.33"
            }
          ]
        }
      },
      "cpp": {
        "fcfs": {
          "filename": "fcfs.cpp",
          "langLabel": "C++ (G++ 17)",
          "source": "/*\n * Practical 03 (C++ - FCFS Standalone)\n * Compile: g++ -std=c++17 -Wall fcfs.cpp -o fcfs_cpp\n * Run:     ./fcfs_cpp\n */\n#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <iomanip>\n\nstruct Process { int pid, arrival, burst, completion = 0, turnaround = 0, waiting = 0; };\n\nint main() {\n    int n;\n    std::cout << \"Enter number of processes: \";\n    if (!(std::cin >> n) || n <= 0) return 1;\n    std::vector<Process> p(n);\n    for (int i = 0; i < n; ++i) std::cin >> p[i].pid >> p[i].arrival >> p[i].burst;\n    std::sort(p.begin(), p.end(), [](const Process& a, const Process& b) {\n        return a.arrival != b.arrival ? a.arrival < b.arrival : a.pid < b.pid;\n    });\n    int cur = 0; double tTAT = 0, tWT = 0;\n    for (auto& proc : p) {\n        if (cur < proc.arrival) cur = proc.arrival;\n        proc.completion = cur + proc.burst;\n        proc.turnaround = proc.completion - proc.arrival;\n        proc.waiting = proc.turnaround - proc.burst;\n        cur = proc.completion; tTAT += proc.turnaround; tWT += proc.waiting;\n    }\n    std::cout << \"\\n--- FCFS Scheduling Result ---\\nPID\\tAT\\tBT\\tCT\\tTAT\\tWT\\n\";\n    for (const auto& proc : p)\n        std::cout << \"P\" << proc.pid << \"\\t\" << proc.arrival << \"\\t\" << proc.burst << \"\\t\" << proc.completion << \"\\t\" << proc.turnaround << \"\\t\" << proc.waiting << \"\\n\";\n    std::cout << std::fixed << std::setprecision(2) << \"\\nAverage Turnaround Time: \" << tTAT / n << \"\\nAverage Waiting Time   : \" << tWT / n << \"\\n\";\n    return 0;\n}\n",
          "compileCmd": "g++ -std=c++17 -Wall fcfs.cpp -o fcfs_cpp",
          "runCmd": "./fcfs_cpp",
          "sampleInputs": [
            {
              "desc": "Test Case 1: 4 processes arriving sequentially (0, 1, 2, 3)",
              "input": "4\n1 0 5\n2 1 3\n3 2 8\n4 3 6"
            },
            {
              "desc": "Test Case 2: 3 processes with CPU idle gap",
              "input": "3\n1 0 4\n2 6 3\n3 7 2"
            }
          ],
          "sampleOutputs": [
            {
              "desc": "Expected FCFS Output (Test Case 1)",
              "output": "--- FCFS Scheduling Result ---\nPID\tAT\tBT\tCT\tTAT\tWT\nP1\t0\t5\t5\t5\t0\nP2\t1\t3\t8\t7\t4\nP3\t2\t8\t16\t14\t6\nP4\t3\t6\t22\t19\t13\n\nAverage Turnaround Time: 11.25\nAverage Waiting Time   : 5.75"
            },
            {
              "desc": "Expected FCFS Output (Test Case 2)",
              "output": "--- FCFS Scheduling Result ---\nPID\tAT\tBT\tCT\tTAT\tWT\nP1\t0\t4\t4\t4\t0\nP2\t6\t3\t9\t3\t0\nP3\t7\t2\t11\t4\t2\n\nAverage Turnaround Time: 3.67\nAverage Waiting Time   : 0.67"
            }
          ]
        },
        "sjf": {
          "filename": "sjf.cpp",
          "langLabel": "C++ (G++ 17)",
          "source": "/*\n * Practical 03 (C++ - SJF Standalone)\n * Compile: g++ -std=c++17 -Wall sjf.cpp -o sjf_cpp\n * Run:     ./sjf_cpp\n */\n#include <iostream>\n#include <vector>\n#include <limits>\n#include <iomanip>\n\nstruct Process { int pid, arrival, burst, completion = 0, turnaround = 0, waiting = 0; bool done = false; };\n\nint main() {\n    int n;\n    std::cout << \"Enter number of processes: \";\n    if (!(std::cin >> n) || n <= 0) return 1;\n    std::vector<Process> p(n);\n    for (int i = 0; i < n; ++i) std::cin >> p[i].pid >> p[i].arrival >> p[i].burst;\n    int completed = 0, cur = 0; double tTAT = 0, tWT = 0;\n    while (completed < n) {\n        int idx = -1, minBT = std::numeric_limits<int>::max();\n        for (int i = 0; i < n; ++i)\n            if (!p[i].done && p[i].arrival <= cur && (p[i].burst < minBT || (p[i].burst == minBT && p[i].arrival < p[idx].arrival))) {\n                minBT = p[i].burst; idx = i;\n            }\n        if (idx == -1) ++cur;\n        else {\n            p[idx].completion = cur + p[idx].burst;\n            p[idx].turnaround = p[idx].completion - p[idx].arrival;\n            p[idx].waiting = p[idx].turnaround - p[idx].burst;\n            p[idx].done = true; cur = p[idx].completion; ++completed;\n            tTAT += p[idx].turnaround; tWT += p[idx].waiting;\n        }\n    }\n    std::cout << \"\\n--- SJF (Non-Preemptive) Scheduling Result ---\\nPID\\tAT\\tBT\\tCT\\tTAT\\tWT\\n\";\n    for (const auto& proc : p)\n        std::cout << \"P\" << proc.pid << \"\\t\" << proc.arrival << \"\\t\" << proc.burst << \"\\t\" << proc.completion << \"\\t\" << proc.turnaround << \"\\t\" << proc.waiting << \"\\n\";\n    std::cout << std::fixed << std::setprecision(2) << \"\\nAverage Turnaround Time: \" << tTAT / n << \"\\nAverage Waiting Time   : \" << tWT / n << \"\\n\";\n    return 0;\n}\n",
          "compileCmd": "g++ -std=c++17 -Wall sjf.cpp -o sjf_cpp",
          "runCmd": "./sjf_cpp",
          "sampleInputs": [
            {
              "desc": "Test Case 1: 4 processes (same dataset as FCFS for comparison)",
              "input": "4\n1 0 5\n2 1 3\n3 2 8\n4 3 6"
            },
            {
              "desc": "Test Case 2: 4 processes arriving at time 0",
              "input": "4\n1 0 6\n2 0 8\n3 0 7\n4 0 3"
            }
          ],
          "sampleOutputs": [
            {
              "desc": "Expected SJF Output (Test Case 1)",
              "output": "--- SJF (Non-Preemptive) Scheduling Result ---\nPID\tAT\tBT\tCT\tTAT\tWT\nP1\t0\t5\t5\t5\t0\nP2\t1\t3\t8\t7\t4\nP3\t2\t8\t22\t20\t12\nP4\t3\t6\t14\t11\t5\n\nAverage Turnaround Time: 10.75\nAverage Waiting Time   : 5.25"
            },
            {
              "desc": "Expected SJF Output (Test Case 2)",
              "output": "--- SJF (Non-Preemptive) Scheduling Result ---\nPID\tAT\tBT\tCT\tTAT\tWT\nP1\t0\t6\t9\t9\t3\nP2\t0\t8\t24\t24\t16\nP3\t0\t7\t16\t16\t9\nP4\t0\t3\t3\t3\t0\n\nAverage Turnaround Time: 13.00\nAverage Waiting Time   : 7.00"
            }
          ]
        },
        "rr": {
          "filename": "round_robin.cpp",
          "langLabel": "C++ (G++ 17)",
          "source": "/*\n * Practical 03 (C++ - Round Robin Standalone)\n * Compile: g++ -std=c++17 -Wall round_robin.cpp -o rr_cpp\n * Run:     ./rr_cpp\n */\n#include <iostream>\n#include <vector>\n#include <queue>\n#include <algorithm>\n#include <iomanip>\n\nstruct Process { int pid, arrival, burst, remaining, completion = 0, turnaround = 0, waiting = 0; bool inQueue = false; };\n\nint main() {\n    int n, tq;\n    std::cout << \"Enter number of processes: \";\n    if (!(std::cin >> n) || n <= 0) return 1;\n    std::vector<Process> p(n); int earliest = 1e9;\n    for (int i = 0; i < n; ++i) {\n        std::cin >> p[i].pid >> p[i].arrival >> p[i].burst;\n        p[i].remaining = p[i].burst; earliest = std::min(earliest, p[i].arrival);\n    }\n    std::cout << \"Enter Time Quantum: \";\n    if (!(std::cin >> tq) || tq <= 0) return 1;\n    std::queue<int> q; int cur = earliest, completed = 0; double tTAT = 0, tWT = 0;\n    for (int i = 0; i < n; ++i) if (p[i].arrival <= cur && !p[i].inQueue) { q.push(i); p[i].inQueue = true; }\n    while (completed < n) {\n        if (q.empty()) {\n            ++cur;\n            for (int i = 0; i < n; ++i) if (p[i].arrival <= cur && p[i].remaining > 0 && !p[i].inQueue) { q.push(i); p[i].inQueue = true; }\n            continue;\n        }\n        int idx = q.front(); q.pop();\n        int ex = std::min(tq, p[idx].remaining); p[idx].remaining -= ex; cur += ex;\n        for (int i = 0; i < n; ++i) if (p[i].arrival <= cur && p[i].remaining > 0 && !p[i].inQueue) { q.push(i); p[i].inQueue = true; }\n        if (p[idx].remaining == 0) {\n            p[idx].completion = cur; p[idx].turnaround = p[idx].completion - p[idx].arrival;\n            p[idx].waiting = p[idx].turnaround - p[idx].burst;\n            tTAT += p[idx].turnaround; tWT += p[idx].waiting; ++completed;\n        } else q.push(idx);\n    }\n    std::cout << \"\\n--- Round Robin (TQ = \" << tq << \") Scheduling Result ---\\nPID\\tAT\\tBT\\tCT\\tTAT\\tWT\\n\";\n    for (const auto& proc : p)\n        std::cout << \"P\" << proc.pid << \"\\t\" << proc.arrival << \"\\t\" << proc.burst << \"\\t\" << proc.completion << \"\\t\" << proc.turnaround << \"\\t\" << proc.waiting << \"\\n\";\n    std::cout << std::fixed << std::setprecision(2) << \"\\nAverage Turnaround Time: \" << tTAT / n << \"\\nAverage Waiting Time   : \" << tWT / n << \"\\n\";\n    return 0;\n}\n",
          "compileCmd": "g++ -std=c++17 -Wall round_robin.cpp -o rr_cpp",
          "runCmd": "./rr_cpp",
          "sampleInputs": [
            {
              "desc": "Test Case 1: 4 processes with Time Quantum = 2",
              "input": "4\n1 0 5\n2 1 3\n3 2 8\n4 3 6\n2"
            },
            {
              "desc": "Test Case 2: 3 processes arriving at time 0 with Time Quantum = 4",
              "input": "3\n1 0 10\n2 0 5\n3 0 8\n4"
            }
          ],
          "sampleOutputs": [
            {
              "desc": "Expected Round Robin Output (Test Case 1, TQ=2)",
              "output": "--- Round Robin (TQ = 2) Scheduling Result ---\nPID\tAT\tBT\tCT\tTAT\tWT\nP1\t0\t5\t17\t17\t12\nP2\t1\t3\t11\t10\t7\nP3\t2\t8\t22\t20\t12\nP4\t3\t6\t20\t17\t11\n\nAverage Turnaround Time: 16.00\nAverage Waiting Time   : 10.50"
            },
            {
              "desc": "Expected Round Robin Output (Test Case 2, TQ=4)",
              "output": "--- Round Robin (TQ = 4) Scheduling Result ---\nPID\tAT\tBT\tCT\tTAT\tWT\nP1\t0\t10\t23\t23\t13\nP2\t0\t5\t17\t17\t12\nP3\t0\t8\t21\t21\t13\n\nAverage Turnaround Time: 20.33\nAverage Waiting Time   : 12.67"
            }
          ]
        },
        "combined": {
          "filename": "scheduler_menu.cpp",
          "langLabel": "C++ (G++ 17)",
          "source": "/*\n * Practical 03 (C++ - Combined Menu-Driven): FCFS, SJF, Round Robin\n * Compile: g++ -std=c++17 -Wall scheduler_menu.cpp -o scheduler_menu_cpp\n * Run:     ./scheduler_menu_cpp\n */\n#include <iostream>\n#include <vector>\n#include <queue>\n#include <algorithm>\n#include <limits>\n#include <iomanip>\n#include <string>\n\nstruct Process {\n    int pid, arrival, burst, remaining = 0, completion = 0, turnaround = 0, waiting = 0;\n    bool done = false, inQueue = false;\n};\n\nvoid printTable(const std::vector<Process>& p, const std::string& title) {\n    double tTAT = 0, tWT = 0;\n    std::cout << \"\\n--- \" << title << \" ---\\nPID\\tAT\\tBT\\tCT\\tTAT\\tWT\\n\";\n    for (const auto& proc : p) {\n        std::cout << \"P\" << proc.pid << \"\\t\" << proc.arrival << \"\\t\" << proc.burst << \"\\t\" << proc.completion << \"\\t\" << proc.turnaround << \"\\t\" << proc.waiting << \"\\n\";\n        tTAT += proc.turnaround; tWT += proc.waiting;\n    }\n    std::cout << std::fixed << std::setprecision(2) << \"Average Turnaround Time: \" << tTAT / p.size() << \"\\nAverage Waiting Time   : \" << tWT / p.size() << \"\\n\";\n}\n\nvoid runFCFS(std::vector<Process> p) {\n    std::sort(p.begin(), p.end(), [](const Process& a, const Process& b) { return a.arrival != b.arrival ? a.arrival < b.arrival : a.pid < b.pid; });\n    int cur = 0;\n    for (auto& proc : p) {\n        if (cur < proc.arrival) cur = proc.arrival;\n        proc.completion = cur + proc.burst; proc.turnaround = proc.completion - proc.arrival;\n        proc.waiting = proc.turnaround - proc.burst; cur = proc.completion;\n    }\n    printTable(p, \"FCFS Scheduling\");\n}\n\nvoid runSJF(std::vector<Process> p) {\n    int n = static_cast<int>(p.size()), completed = 0, cur = 0;\n    while (completed < n) {\n        int idx = -1, minBT = std::numeric_limits<int>::max();\n        for (int i = 0; i < n; ++i)\n            if (!p[i].done && p[i].arrival <= cur && (p[i].burst < minBT || (p[i].burst == minBT && p[i].arrival < p[idx].arrival))) { minBT = p[i].burst; idx = i; }\n        if (idx == -1) ++cur;\n        else { p[idx].completion = cur + p[idx].burst; p[idx].turnaround = p[idx].completion - p[idx].arrival; p[idx].waiting = p[idx].turnaround - p[idx].burst; p[idx].done = true; cur = p[idx].completion; ++completed; }\n    }\n    printTable(p, \"SJF (Non-Preemptive) Scheduling\");\n}\n\nvoid runRR(std::vector<Process> p, int tq) {\n    int n = static_cast<int>(p.size()), earliest = 1e9;\n    for (auto& proc : p) { proc.remaining = proc.burst; earliest = std::min(earliest, proc.arrival); }\n    std::queue<int> q; int cur = earliest, completed = 0;\n    for (int i = 0; i < n; ++i) if (p[i].arrival <= cur && !p[i].inQueue) { q.push(i); p[i].inQueue = true; }\n    while (completed < n) {\n        if (q.empty()) { ++cur; for (int i = 0; i < n; ++i) if (p[i].arrival <= cur && p[i].remaining > 0 && !p[i].inQueue) { q.push(i); p[i].inQueue = true; } continue; }\n        int idx = q.front(); q.pop(); int ex = std::min(tq, p[idx].remaining); p[idx].remaining -= ex; cur += ex;\n        for (int i = 0; i < n; ++i) if (p[i].arrival <= cur && p[i].remaining > 0 && !p[i].inQueue) { q.push(i); p[i].inQueue = true; }\n        if (p[idx].remaining == 0) { p[idx].completion = cur; p[idx].turnaround = p[idx].completion - p[idx].arrival; p[idx].waiting = p[idx].turnaround - p[idx].burst; ++completed; }\n        else q.push(idx);\n    }\n    printTable(p, \"Round Robin Scheduling\");\n}\n\nint main() {\n    int n, choice, tq;\n    std::cout << \"Enter number of processes: \";\n    if (!(std::cin >> n) || n <= 0) return 1;\n    std::vector<Process> p(n);\n    for (int i = 0; i < n; ++i) std::cin >> p[i].pid >> p[i].arrival >> p[i].burst;\n    do {\n        std::cout << \"\\n=== CPU SCHEDULER MENU ===\\n1. FCFS\\n2. SJF\\n3. Round Robin\\n4. Exit\\nEnter choice: \";\n        if (!(std::cin >> choice)) break;\n        if (choice == 1) runFCFS(p);\n        else if (choice == 2) runSJF(p);\n        else if (choice == 3) { std::cout << \"Enter Time Quantum: \"; std::cin >> tq; if (tq > 0) runRR(p, tq); }\n    } while (choice != 4);\n    return 0;\n}\n",
          "compileCmd": "g++ -std=c++17 -Wall scheduler_menu.cpp -o scheduler_menu_cpp",
          "runCmd": "./scheduler_menu_cpp",
          "sampleInputs": [
            {
              "desc": "Test Case 1: Compare FCFS (1), SJF (2), Round Robin TQ=2 (3), Exit (4)",
              "input": "4\n1 0 5\n2 1 3\n3 2 8\n4 3 6\n1\n2\n3\n2\n4"
            },
            {
              "desc": "Test Case 2: Compare on 3 equal-arrival processes (TQ=3)",
              "input": "3\n1 0 7\n2 0 4\n3 0 9\n1\n2\n3\n3\n4"
            }
          ],
          "sampleOutputs": [
            {
              "desc": "Expected Combined Comparison Output (Test Case 1)",
              "output": "--- FCFS Scheduling ---\nAverage Turnaround Time: 11.25\nAverage Waiting Time   : 5.75\n\n--- SJF (Non-Preemptive) Scheduling ---\nAverage Turnaround Time: 10.75\nAverage Waiting Time   : 5.25\n\n--- Round Robin Scheduling ---\nAverage Turnaround Time: 16.00\nAverage Waiting Time   : 10.50"
            },
            {
              "desc": "Expected Combined Comparison Output (Test Case 2)",
              "output": "--- FCFS Scheduling ---\nAverage Turnaround Time: 12.67\nAverage Waiting Time   : 6.00\n\n--- SJF (Non-Preemptive) Scheduling ---\nAverage Turnaround Time: 11.67\nAverage Waiting Time   : 5.00\n\n--- Round Robin Scheduling ---\nAverage Turnaround Time: 16.00\nAverage Waiting Time   : 9.33"
            }
          ]
        }
      },
      "python": {
        "fcfs": {
          "filename": "fcfs.py",
          "langLabel": "Python 3",
          "source": "#!/usr/bin/env python3\n\"\"\"Practical 03 (Python - FCFS Standalone) | Run: python3 fcfs.py\"\"\"\n\ndef fcfs():\n    n = int(input(\"Enter number of processes: \"))\n    procs = [dict(zip([\"pid\", \"at\", \"bt\"], map(int, input(f\"P{i+1} (PID AT BT): \").split()))) for i in range(n)]\n    procs.sort(key=lambda x: (x[\"at\"], x[\"pid\"]))\n    cur = 0\n    for p in procs:\n        if cur < p[\"at\"]: cur = p[\"at\"]\n        p[\"ct\"] = cur + p[\"bt\"]\n        p[\"tat\"] = p[\"ct\"] - p[\"at\"]\n        p[\"wt\"] = p[\"tat\"] - p[\"bt\"]\n        cur = p[\"ct\"]\n    print(\"\\n--- FCFS Scheduling Result ---\\nPID\\tAT\\tBT\\tCT\\tTAT\\tWT\")\n    for p in procs:\n        print(f\"P{p['pid']}\\t{p['at']}\\t{p['bt']}\\t{p['ct']}\\t{p['tat']}\\t{p['wt']}\")\n    print(f\"\\nAverage Turnaround Time: {sum(p['tat'] for p in procs)/n:.2f}\")\n    print(f\"Average Waiting Time   : {sum(p['wt'] for p in procs)/n:.2f}\")\n\nif __name__ == \"__main__\":\n    fcfs()\n",
          "compileCmd": "python3 -m py_compile fcfs.py",
          "runCmd": "python3 fcfs.py",
          "sampleInputs": [
            {
              "desc": "Test Case 1: 4 processes arriving sequentially (0, 1, 2, 3)",
              "input": "4\n1 0 5\n2 1 3\n3 2 8\n4 3 6"
            },
            {
              "desc": "Test Case 2: 3 processes with CPU idle gap",
              "input": "3\n1 0 4\n2 6 3\n3 7 2"
            }
          ],
          "sampleOutputs": [
            {
              "desc": "Expected FCFS Output (Test Case 1)",
              "output": "--- FCFS Scheduling Result ---\nPID\tAT\tBT\tCT\tTAT\tWT\nP1\t0\t5\t5\t5\t0\nP2\t1\t3\t8\t7\t4\nP3\t2\t8\t16\t14\t6\nP4\t3\t6\t22\t19\t13\n\nAverage Turnaround Time: 11.25\nAverage Waiting Time   : 5.75"
            },
            {
              "desc": "Expected FCFS Output (Test Case 2)",
              "output": "--- FCFS Scheduling Result ---\nPID\tAT\tBT\tCT\tTAT\tWT\nP1\t0\t4\t4\t4\t0\nP2\t6\t3\t9\t3\t0\nP3\t7\t2\t11\t4\t2\n\nAverage Turnaround Time: 3.67\nAverage Waiting Time   : 0.67"
            }
          ]
        },
        "sjf": {
          "filename": "sjf.py",
          "langLabel": "Python 3",
          "source": "#!/usr/bin/env python3\n\"\"\"Practical 03 (Python - SJF Standalone) | Run: python3 sjf.py\"\"\"\n\ndef sjf():\n    n = int(input(\"Enter number of processes: \"))\n    procs = [dict(zip([\"pid\", \"at\", \"bt\"], map(int, input(f\"P{i+1} (PID AT BT): \").split())), done=False) for i in range(n)]\n    completed, cur = 0, 0\n    while completed < n:\n        ready = [p for p in procs if not p[\"done\"] and p[\"at\"] <= cur]\n        if not ready: cur += 1; continue\n        p = min(ready, key=lambda x: (x[\"bt\"], x[\"at\"]))\n        p[\"ct\"] = cur + p[\"bt\"]; p[\"tat\"] = p[\"ct\"] - p[\"at\"]; p[\"wt\"] = p[\"tat\"] - p[\"bt\"]\n        p[\"done\"] = True; cur = p[\"ct\"]; completed += 1\n    print(\"\\n--- SJF (Non-Preemptive) Scheduling Result ---\\nPID\\tAT\\tBT\\tCT\\tTAT\\tWT\")\n    for p in procs:\n        print(f\"P{p['pid']}\\t{p['at']}\\t{p['bt']}\\t{p['ct']}\\t{p['tat']}\\t{p['wt']}\")\n    print(f\"\\nAverage Turnaround Time: {sum(p['tat'] for p in procs)/n:.2f}\")\n    print(f\"Average Waiting Time   : {sum(p['wt'] for p in procs)/n:.2f}\")\n\nif __name__ == \"__main__\":\n    sjf()\n",
          "compileCmd": "python3 -m py_compile sjf.py",
          "runCmd": "python3 sjf.py",
          "sampleInputs": [
            {
              "desc": "Test Case 1: 4 processes (same dataset as FCFS for comparison)",
              "input": "4\n1 0 5\n2 1 3\n3 2 8\n4 3 6"
            },
            {
              "desc": "Test Case 2: 4 processes arriving at time 0",
              "input": "4\n1 0 6\n2 0 8\n3 0 7\n4 0 3"
            }
          ],
          "sampleOutputs": [
            {
              "desc": "Expected SJF Output (Test Case 1)",
              "output": "--- SJF (Non-Preemptive) Scheduling Result ---\nPID\tAT\tBT\tCT\tTAT\tWT\nP1\t0\t5\t5\t5\t0\nP2\t1\t3\t8\t7\t4\nP3\t2\t8\t22\t20\t12\nP4\t3\t6\t14\t11\t5\n\nAverage Turnaround Time: 10.75\nAverage Waiting Time   : 5.25"
            },
            {
              "desc": "Expected SJF Output (Test Case 2)",
              "output": "--- SJF (Non-Preemptive) Scheduling Result ---\nPID\tAT\tBT\tCT\tTAT\tWT\nP1\t0\t6\t9\t9\t3\nP2\t0\t8\t24\t24\t16\nP3\t0\t7\t16\t16\t9\nP4\t0\t3\t3\t3\t0\n\nAverage Turnaround Time: 13.00\nAverage Waiting Time   : 7.00"
            }
          ]
        },
        "rr": {
          "filename": "round_robin.py",
          "langLabel": "Python 3",
          "source": "#!/usr/bin/env python3\n\"\"\"Practical 03 (Python - Round Robin Standalone) | Run: python3 round_robin.py\"\"\"\nfrom collections import deque\n\ndef round_robin():\n    n = int(input(\"Enter number of processes: \"))\n    procs = []\n    for i in range(n):\n        pid, at, bt = map(int, input(f\"P{i+1} (PID AT BT): \").split())\n        procs.append({\"pid\": pid, \"at\": at, \"bt\": bt, \"rem\": bt, \"in_q\": False, \"ct\": 0, \"tat\": 0, \"wt\": 0})\n    tq = int(input(\"Enter Time Quantum: \"))\n    cur = min(p[\"at\"] for p in procs)\n    q = deque()\n    for i, p in enumerate(procs):\n        if p[\"at\"] <= cur: q.append(i); p[\"in_q\"] = True\n    completed = 0\n    while completed < n:\n        if not q:\n            cur += 1\n            for i, p in enumerate(procs):\n                if p[\"at\"] <= cur and p[\"rem\"] > 0 and not p[\"in_q\"]: q.append(i); p[\"in_q\"] = True\n            continue\n        idx = q.popleft(); p = procs[idx]\n        ex = min(tq, p[\"rem\"]); p[\"rem\"] -= ex; cur += ex\n        for i, proc in enumerate(procs):\n            if proc[\"at\"] <= cur and proc[\"rem\"] > 0 and not proc[\"in_q\"]: q.append(i); proc[\"in_q\"] = True\n        if p[\"rem\"] == 0:\n            p[\"ct\"] = cur; p[\"tat\"] = p[\"ct\"] - p[\"at\"]; p[\"wt\"] = p[\"tat\"] - p[\"bt\"]; completed += 1\n        else: q.append(idx)\n    print(f\"\\n--- Round Robin (TQ = {tq}) Scheduling Result ---\\nPID\\tAT\\tBT\\tCT\\tTAT\\tWT\")\n    for p in procs:\n        print(f\"P{p['pid']}\\t{p['at']}\\t{p['bt']}\\t{p['ct']}\\t{p['tat']}\\t{p['wt']}\")\n    print(f\"\\nAverage Turnaround Time: {sum(p['tat'] for p in procs)/n:.2f}\")\n    print(f\"Average Waiting Time   : {sum(p['wt'] for p in procs)/n:.2f}\")\n\nif __name__ == \"__main__\":\n    round_robin()\n",
          "compileCmd": "python3 -m py_compile round_robin.py",
          "runCmd": "python3 round_robin.py",
          "sampleInputs": [
            {
              "desc": "Test Case 1: 4 processes with Time Quantum = 2",
              "input": "4\n1 0 5\n2 1 3\n3 2 8\n4 3 6\n2"
            },
            {
              "desc": "Test Case 2: 3 processes arriving at time 0 with Time Quantum = 4",
              "input": "3\n1 0 10\n2 0 5\n3 0 8\n4"
            }
          ],
          "sampleOutputs": [
            {
              "desc": "Expected Round Robin Output (Test Case 1, TQ=2)",
              "output": "--- Round Robin (TQ = 2) Scheduling Result ---\nPID\tAT\tBT\tCT\tTAT\tWT\nP1\t0\t5\t17\t17\t12\nP2\t1\t3\t11\t10\t7\nP3\t2\t8\t22\t20\t12\nP4\t3\t6\t20\t17\t11\n\nAverage Turnaround Time: 16.00\nAverage Waiting Time   : 10.50"
            },
            {
              "desc": "Expected Round Robin Output (Test Case 2, TQ=4)",
              "output": "--- Round Robin (TQ = 4) Scheduling Result ---\nPID\tAT\tBT\tCT\tTAT\tWT\nP1\t0\t10\t23\t23\t13\nP2\t0\t5\t17\t17\t12\nP3\t0\t8\t21\t21\t13\n\nAverage Turnaround Time: 20.33\nAverage Waiting Time   : 12.67"
            }
          ]
        },
        "combined": {
          "filename": "scheduler_menu.py",
          "langLabel": "Python 3",
          "source": "#!/usr/bin/env python3\n\"\"\"Practical 03 (Python - Combined Menu-Driven): FCFS, SJF, Round Robin | Run: python3 scheduler_menu.py\"\"\"\nfrom collections import deque\nimport copy\n\ndef print_table(procs, title):\n    n = len(procs)\n    print(f\"\\n--- {title} ---\\nPID\\tAT\\tBT\\tCT\\tTAT\\tWT\")\n    for p in procs:\n        print(f\"P{p['pid']}\\t{p['at']}\\t{p['bt']}\\t{p['ct']}\\t{p['tat']}\\t{p['wt']}\")\n    print(f\"Average Turnaround Time: {sum(p['tat'] for p in procs)/n:.2f}\")\n    print(f\"Average Waiting Time   : {sum(p['wt'] for p in procs)/n:.2f}\")\n\ndef run_fcfs(orig):\n    procs = copy.deepcopy(orig); procs.sort(key=lambda x: (x[\"at\"], x[\"pid\"])); cur = 0\n    for p in procs:\n        if cur < p[\"at\"]: cur = p[\"at\"]\n        p[\"ct\"] = cur + p[\"bt\"]; p[\"tat\"] = p[\"ct\"] - p[\"at\"]; p[\"wt\"] = p[\"tat\"] - p[\"bt\"]; cur = p[\"ct\"]\n    print_table(procs, \"FCFS Scheduling\")\n\ndef run_sjf(orig):\n    procs = copy.deepcopy(orig)\n    for p in procs: p[\"done\"] = False\n    completed, cur = 0, 0\n    while completed < len(procs):\n        ready = [p for p in procs if not p[\"done\"] and p[\"at\"] <= cur]\n        if not ready: cur += 1; continue\n        p = min(ready, key=lambda x: (x[\"bt\"], x[\"at\"]))\n        p[\"ct\"] = cur + p[\"bt\"]; p[\"tat\"] = p[\"ct\"] - p[\"at\"]; p[\"wt\"] = p[\"tat\"] - p[\"bt\"]\n        p[\"done\"] = True; cur = p[\"ct\"]; completed += 1\n    print_table(procs, \"SJF (Non-Preemptive) Scheduling\")\n\ndef run_rr(orig, tq):\n    procs = copy.deepcopy(orig)\n    for p in procs: p[\"rem\"] = p[\"bt\"]; p[\"in_q\"] = False\n    cur = min(p[\"at\"] for p in procs); q = deque()\n    for i, p in enumerate(procs):\n        if p[\"at\"] <= cur: q.append(i); p[\"in_q\"] = True\n    completed = 0\n    while completed < len(procs):\n        if not q:\n            cur += 1\n            for i, p in enumerate(procs):\n                if p[\"at\"] <= cur and p[\"rem\"] > 0 and not p[\"in_q\"]: q.append(i); p[\"in_q\"] = True\n            continue\n        idx = q.popleft(); p = procs[idx]; ex = min(tq, p[\"rem\"]); p[\"rem\"] -= ex; cur += ex\n        for i, proc in enumerate(procs):\n            if proc[\"at\"] <= cur and proc[\"rem\"] > 0 and not proc[\"in_q\"]: q.append(i); proc[\"in_q\"] = True\n        if p[\"rem\"] == 0:\n            p[\"ct\"] = cur; p[\"tat\"] = p[\"ct\"] - p[\"at\"]; p[\"wt\"] = p[\"tat\"] - p[\"bt\"]; completed += 1\n        else: q.append(idx)\n    print_table(procs, f\"Round Robin Scheduling (TQ={tq})\")\n\ndef main():\n    n = int(input(\"Enter number of processes: \"))\n    procs = [dict(zip([\"pid\", \"at\", \"bt\"], map(int, input(f\"P{i+1} (PID AT BT): \").split()))) for i in range(n)]\n    while True:\n        ch = int(input(\"\\n=== CPU SCHEDULER MENU ===\\n1. FCFS\\n2. SJF\\n3. Round Robin\\n4. Exit\\nEnter choice: \"))\n        if ch == 1: run_fcfs(procs)\n        elif ch == 2: run_sjf(procs)\n        elif ch == 3: run_rr(procs, int(input(\"Enter Time Quantum: \")))\n        elif ch == 4: break\n\nif __name__ == \"__main__\":\n    main()\n",
          "compileCmd": "python3 -m py_compile scheduler_menu.py",
          "runCmd": "python3 scheduler_menu.py",
          "sampleInputs": [
            {
              "desc": "Test Case 1: Compare FCFS (1), SJF (2), Round Robin TQ=2 (3), Exit (4)",
              "input": "4\n1 0 5\n2 1 3\n3 2 8\n4 3 6\n1\n2\n3\n2\n4"
            },
            {
              "desc": "Test Case 2: Compare on 3 equal-arrival processes (TQ=3)",
              "input": "3\n1 0 7\n2 0 4\n3 0 9\n1\n2\n3\n3\n4"
            }
          ],
          "sampleOutputs": [
            {
              "desc": "Expected Combined Comparison Output (Test Case 1)",
              "output": "--- FCFS Scheduling ---\nAverage Turnaround Time: 11.25\nAverage Waiting Time   : 5.75\n\n--- SJF (Non-Preemptive) Scheduling ---\nAverage Turnaround Time: 10.75\nAverage Waiting Time   : 5.25\n\n--- Round Robin Scheduling ---\nAverage Turnaround Time: 16.00\nAverage Waiting Time   : 10.50"
            },
            {
              "desc": "Expected Combined Comparison Output (Test Case 2)",
              "output": "--- FCFS Scheduling ---\nAverage Turnaround Time: 12.67\nAverage Waiting Time   : 6.00\n\n--- SJF (Non-Preemptive) Scheduling ---\nAverage Turnaround Time: 11.67\nAverage Waiting Time   : 5.00\n\n--- Round Robin Scheduling ---\nAverage Turnaround Time: 16.00\nAverage Waiting Time   : 9.33"
            }
          ]
        }
      }
    }
  },
  {
    "id": 4,
    "number": "PR-04",
    "title": "Process Creation, Termination and IPC using PIPE",
    "category": "ipc",
    "categoryLabel": "Process Management & IPC",
    "type": "coding",
    "aim": "To demonstrate actual OS process creation, parent-child synchronization, termination, and inter-process communication (IPC) using anonymous pipes in C (fork, pipe, read, write, wait), C++ (POSIX APIs), and Python (multiprocessing.Pipe).",
    "shortDesc": "Real parent-child process creation, PID tracking, wait() termination, and bidirectional pipe IPC.",
    "topics": [
      "fork()",
      "pipe()",
      "read() / write()",
      "wait()",
      "Process Termination",
      "multiprocessing.Pipe"
    ],
    "implCount": 3,
    "languages": [
      "c",
      "cpp",
      "python"
    ],
    "defaultLang": "c",
    "linuxOnlyNote": "Linux / WSL (Ubuntu) Required: C and C++ implementations use POSIX system calls (<unistd.h>, <sys/wait.h>) including fork(), pipe(), and wait(), which are native to Linux/Unix kernels.",
    "code": {
      "c": {
        "filename": "pipe_ipc.c",
        "langLabel": "C (POSIX fork & pipe)",
        "source": "/*\n * Practical 04: Process Creation, Termination & IPC using PIPE in C\n * Uses POSIX fork(), pipe(), write(), read(), wait(), and exit().\n * Compile: gcc -Wall pipe_ipc.c -o pipe_ipc\n * Run:     ./pipe_ipc\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <unistd.h>\n#include <sys/wait.h>\n\nint main() {\n    int p2c[2], c2p[2];\n    if (pipe(p2c) == -1 || pipe(c2p) == -1) {\n        perror(\"pipe() failed\");\n        exit(EXIT_FAILURE);\n    }\n\n    char message[256];\n    printf(\"Enter message from Parent to Child: \");\n    if (fgets(message, sizeof(message), stdin) == NULL) strcpy(message, \"Hello from Parent!\");\n    message[strcspn(message, \"\\n\")] = '\\0';\n\n    pid_t pid = fork();\n    if (pid < 0) {\n        perror(\"fork() failed\");\n        exit(EXIT_FAILURE);\n    } else if (pid == 0) {\n        close(p2c[1]); close(c2p[0]);\n        char recv_buf[256];\n        ssize_t n = read(p2c[0], recv_buf, sizeof(recv_buf) - 1);\n        if (n > 0) {\n            recv_buf[n] = '\\0';\n            printf(\"[Child PID %d | PPID %d] Received: \\\"%s\\\"\\n\", getpid(), getppid(), recv_buf);\n        }\n        char reply[300];\n        snprintf(reply, sizeof(reply), \"ACK from Child (PID %d): Processed '%s'\", getpid(), recv_buf);\n        write(c2p[1], reply, strlen(reply) + 1);\n        close(p2c[0]); close(c2p[1]);\n        printf(\"[Child PID %d] Terminating normally.\\n\", getpid());\n        exit(EXIT_SUCCESS);\n    } else {\n        close(p2c[0]); close(c2p[1]);\n        printf(\"[Parent PID %d] Created Child PID %d. Sending message...\\n\", getpid(), pid);\n        write(p2c[1], message, strlen(message) + 1);\n        close(p2c[1]);\n\n        char ack_buf[300];\n        ssize_t n = read(c2p[0], ack_buf, sizeof(ack_buf) - 1);\n        if (n > 0) {\n            ack_buf[n] = '\\0';\n            printf(\"[Parent PID %d] Received reply: \\\"%s\\\"\\n\", getpid(), ack_buf);\n        }\n        close(c2p[0]);\n\n        int status;\n        pid_t terminated = wait(&status);\n        if (WIFEXITED(status)) {\n            printf(\"[Parent PID %d] Child PID %d terminated with exit code %d.\\n\",\n                   getpid(), terminated, WEXITSTATUS(status));\n        }\n    }\n    return 0;\n}\n",
        "compileCmd": "gcc -Wall pipe_ipc.c -o pipe_ipc",
        "runCmd": "./pipe_ipc",
        "sampleInputs": [
          {
            "desc": "Scenario 1: Send greeting message through pipe",
            "input": "Operating Systems Lab IPC Test"
          },
          {
            "desc": "Scenario 2: Send command-style payload",
            "input": "STATUS_CHECK_REQ_101"
          }
        ],
        "sampleOutputs": [
          {
            "desc": "Bidirectional pipe exchange output (Scenario 1)",
            "output": "[Parent PID 4120] Created Child PID 4121. Sending message...\n[Child PID 4121 | PPID 4120] Received: \"Operating Systems Lab IPC Test\"\n[Child PID 4121] Terminating normally.\n[Parent PID 4120] Received reply: \"ACK from Child (PID 4121): Processed 'Operating Systems Lab IPC Test'\"\n[Parent PID 4120] Child PID 4121 terminated with exit code 0."
          },
          {
            "desc": "Bidirectional pipe exchange output (Scenario 2)",
            "output": "[Parent PID 4188] Created Child PID 4189. Sending message...\n[Child PID 4189 | PPID 4188] Received: \"STATUS_CHECK_REQ_101\"\n[Child PID 4189] Terminating normally.\n[Parent PID 4188] Received reply: \"ACK from Child (PID 4189): Processed 'STATUS_CHECK_REQ_101'\"\n[Parent PID 4188] Child PID 4189 terminated with exit code 0."
          }
        ]
      },
      "cpp": {
        "filename": "pipe_ipc.cpp",
        "langLabel": "C++ (POSIX fork & pipe)",
        "source": "/*\n * Practical 04: Process Creation, Termination & IPC using PIPE in C++\n * Note: Uses POSIX system calls (fork, pipe, read, write, waitpid) inside C++.\n * Compile: g++ -std=c++17 -Wall pipe_ipc.cpp -o pipe_ipc_cpp\n * Run:     ./pipe_ipc_cpp\n */\n#include <iostream>\n#include <string>\n#include <array>\n#include <unistd.h>\n#include <sys/wait.h>\n\nint main() {\n    int p2c[2], c2p[2];\n    if (pipe(p2c) == -1 || pipe(c2p) == -1) {\n        std::cerr << \"Error: Failed to create POSIX pipes.\\n\";\n        return 1;\n    }\n\n    std::string inputMsg;\n    std::cout << \"Enter message to send from Parent to Child: \";\n    std::getline(std::cin, inputMsg);\n    if (inputMsg.empty()) inputMsg = \"Default IPC Payload\";\n\n    pid_t pid = fork();\n    if (pid < 0) {\n        std::cerr << \"Error: fork() failed.\\n\";\n        return 1;\n    } else if (pid == 0) {\n        close(p2c[1]); close(c2p[0]);\n        std::array<char, 256> buffer{};\n        ssize_t bytesRead = read(p2c[0], buffer.data(), buffer.size() - 1);\n        std::string received = (bytesRead > 0) ? std::string(buffer.data(), bytesRead) : \"\";\n        std::cout << \"[Child PID \" << getpid() << \" | PPID \" << getppid()\n                  << \"] Received: \\\"\" << received << \"\\\"\\n\";\n        std::string reply = \"Child PID \" + std::to_string(getpid()) + \" received \"\n                          + std::to_string(received.size()) + \" bytes.\";\n        write(c2p[1], reply.c_str(), reply.size());\n        close(p2c[0]); close(c2p[1]);\n        std::cout << \"[Child PID \" << getpid() << \"] Exiting cleanly.\\n\";\n        _exit(0);\n    } else {\n        close(p2c[0]); close(c2p[1]);\n        std::cout << \"[Parent PID \" << getpid() << \"] Forked Child PID \" << pid << \"\\n\";\n        write(p2c[1], inputMsg.c_str(), inputMsg.size());\n        close(p2c[1]);\n\n        std::array<char, 256> ackBuf{};\n        ssize_t bytesRead = read(c2p[0], ackBuf.data(), ackBuf.size() - 1);\n        if (bytesRead > 0) {\n            std::cout << \"[Parent PID \" << getpid() << \"] Child Reply: \\\"\"\n                      << std::string(ackBuf.data(), bytesRead) << \"\\\"\\n\";\n        }\n        close(c2p[0]);\n\n        int status = 0;\n        waitpid(pid, &status, 0);\n        if (WIFEXITED(status)) {\n            std::cout << \"[Parent PID \" << getpid() << \"] Reaped Child PID \" << pid\n                      << \" (exit code: \" << WEXITSTATUS(status) << \")\\n\";\n        }\n    }\n    return 0;\n}\n",
        "compileCmd": "g++ -std=c++17 -Wall pipe_ipc.cpp -o pipe_ipc_cpp",
        "runCmd": "./pipe_ipc_cpp",
        "sampleInputs": [
          {
            "desc": "Scenario 1: Standard text message",
            "input": "Hello from C++ Parent"
          },
          {
            "desc": "Scenario 2: Multi-word task payload",
            "input": "COMPUTE_CHECKSUM_BLOCK_7"
          }
        ],
        "sampleOutputs": [
          {
            "desc": "Output for Scenario 1",
            "output": "[Parent PID 5201] Forked Child PID 5202\n[Child PID 5202 | PPID 5201] Received: \"Hello from C++ Parent\"\n[Child PID 5202] Exiting cleanly.\n[Parent PID 5201] Child Reply: \"Child PID 5202 received 21 bytes.\"\n[Parent PID 5201] Reaped Child PID 5202 (exit code: 0)"
          },
          {
            "desc": "Output for Scenario 2",
            "output": "[Parent PID 5240] Forked Child PID 5241\n[Child PID 5241 | PPID 5240] Received: \"COMPUTE_CHECKSUM_BLOCK_7\"\n[Child PID 5241] Exiting cleanly.\n[Parent PID 5240] Child Reply: \"Child PID 5241 received 24 bytes.\"\n[Parent PID 5240] Reaped Child PID 5241 (exit code: 0)"
          }
        ]
      },
      "python": {
        "filename": "pipe_ipc.py",
        "langLabel": "Python (multiprocessing.Pipe)",
        "source": "#!/usr/bin/env python3\n\"\"\"\nPractical 04: Process Creation, Termination & IPC using PIPE in Python\nUses `multiprocessing.Process` and `multiprocessing.Pipe()` for real OS processes.\nRun: python3 pipe_ipc.py\n\"\"\"\nimport os\nfrom multiprocessing import Process, Pipe\n\ndef child_worker(conn):\n    pid = os.getpid()\n    ppid = os.getppid()\n    msg = conn.recv()\n    print(f\"[Child PID {pid} | PPID {ppid}] Received from parent: '{msg}'\")\n    conn.send(f\"ACK from Child PID {pid}: upper='{msg.upper()}'\")\n    conn.close()\n    print(f\"[Child PID {pid}] Task complete, terminating.\")\n\ndef main():\n    message = input(\"Enter message to send from Parent to Child: \").strip() or \"OS Practical Pipe Test\"\n    parent_conn, child_conn = Pipe()\n    child = Process(target=child_worker, args=(child_conn,))\n    child.start()\n    print(f\"[Parent PID {os.getpid()}] Spawned Child PID {child.pid}\")\n\n    parent_conn.send(message)\n    reply = parent_conn.recv()\n    print(f\"[Parent PID {os.getpid()}] Received via pipe: '{reply}'\")\n\n    parent_conn.close()\n    child.join()\n    print(f\"[Parent PID {os.getpid()}] Child exit code: {child.exitcode}\")\n\nif __name__ == \"__main__\":\n    main()\n",
        "compileCmd": "python3 -m py_compile pipe_ipc.py",
        "runCmd": "python3 pipe_ipc.py",
        "sampleInputs": [
          {
            "desc": "Scenario 1: Send lowercase message",
            "input": "hello os kernel"
          },
          {
            "desc": "Scenario 2: Send structured command",
            "input": "sync_buffers_now"
          }
        ],
        "sampleOutputs": [
          {
            "desc": "Output for Scenario 1",
            "output": "[Parent PID 6100] Spawned Child PID 6101\n[Child PID 6101 | PPID 6100] Received from parent: 'hello os kernel'\n[Child PID 6101] Task complete, terminating.\n[Parent PID 6100] Received via pipe: 'ACK from Child PID 6101: upper='HELLO OS KERNEL''\n[Parent PID 6100] Child exit code: 0"
          },
          {
            "desc": "Output for Scenario 2",
            "output": "[Parent PID 6155] Spawned Child PID 6156\n[Child PID 6156 | PPID 6155] Received from parent: 'sync_buffers_now'\n[Child PID 6156] Task complete, terminating.\n[Parent PID 6155] Received via pipe: 'ACK from Child PID 6156: upper='SYNC_BUFFERS_NOW''\n[Parent PID 6155] Child exit code: 0"
          }
        ]
      }
    }
  },
  {
    "id": 5,
    "number": "PR-05",
    "title": "Process Synchronization (Producer-Consumer Problem)",
    "category": "sync",
    "categoryLabel": "Process Synchronization",
    "type": "coding",
    "aim": "To implement multithreaded process synchronization mechanisms (Semaphores, Mutexes, Condition Variables) using the bounded-buffer Producer-Consumer problem in C (pthread_mutex, sem_t), C++ (std::mutex, std::condition_variable), and Python (threading.Lock, Semaphore, Condition).",
    "shortDesc": "Bounded-buffer Producer-Consumer synchronization using mutexes, semaphores, and condition variables.",
    "topics": [
      "POSIX Threads",
      "pthread_mutex_t",
      "sem_t Semaphore",
      "std::condition_variable",
      "Bounded Buffer",
      "Race Condition Prevention"
    ],
    "implCount": 3,
    "languages": [
      "c",
      "cpp",
      "python"
    ],
    "defaultLang": "c",
    "linuxOnlyNote": "C & C++ programs require the POSIX thread library (-pthread) during compilation on Linux/WSL.",
    "code": {
      "c": {
        "filename": "producer_consumer.c",
        "langLabel": "C (POSIX pthread + sem_t)",
        "source": "/*\n * Practical 05: Producer-Consumer Synchronization in C\n * Uses POSIX semaphores (sem_t) + mutex (pthread_mutex_t) to protect bounded buffer.\n * Compile: gcc -Wall producer_consumer.c -o producer_consumer -pthread\n * Run:     ./producer_consumer\n */\n#include <stdio.h>\n#include <stdlib.h>\n#include <pthread.h>\n#include <semaphore.h>\n#include <unistd.h>\n\n#define BUFFER_SIZE 5\n\nint buffer[BUFFER_SIZE];\nint in = 0, out = 0;\nint num_items = 8;\n\nsem_t empty_slots;\nsem_t full_slots;\npthread_mutex_t mutex;\n\nvoid* producer(void* arg) {\n    int id = *(int*)arg;\n    for (int i = 1; i <= num_items; i++) {\n        int item = id * 100 + i;\n        sem_wait(&empty_slots);           // Wait if buffer is full\n        pthread_mutex_lock(&mutex);       // Enter critical section\n\n        buffer[in] = item;\n        printf(\"[Producer %d] Produced item %d at slot %d\\n\", id, item, in);\n        in = (in + 1) % BUFFER_SIZE;\n\n        pthread_mutex_unlock(&mutex);     // Exit critical section\n        sem_post(&full_slots);            // Signal available item\n        usleep(100000);                   // Simulate work (100ms)\n    }\n    return NULL;\n}\n\nvoid* consumer(void* arg) {\n    int id = *(int*)arg;\n    for (int i = 1; i <= num_items; i++) {\n        sem_wait(&full_slots);            // Wait if buffer is empty\n        pthread_mutex_lock(&mutex);       // Enter critical section\n\n        int item = buffer[out];\n        printf(\"    [Consumer %d] Consumed item %d from slot %d\\n\", id, item, out);\n        out = (out + 1) % BUFFER_SIZE;\n\n        pthread_mutex_unlock(&mutex);     // Exit critical section\n        sem_post(&empty_slots);           // Signal empty slot\n        usleep(150000);                   // Simulate consumption (150ms)\n    }\n    return NULL;\n}\n\nint main() {\n    printf(\"Enter number of items per producer/consumer (e.g. 6): \");\n    if (scanf(\"%d\", &num_items) != 1 || num_items <= 0) {\n        num_items = 6;\n    }\n\n    sem_init(&empty_slots, 0, BUFFER_SIZE);\n    sem_init(&full_slots, 0, 0);\n    pthread_mutex_init(&mutex, NULL);\n\n    pthread_t prod_tid, cons_tid;\n    int p_id = 1, c_id = 1;\n\n    printf(\"=== Bounded Buffer Synchronization (Size = %d) ===\\n\", BUFFER_SIZE);\n    pthread_create(&prod_tid, NULL, producer, &p_id);\n    pthread_create(&cons_tid, NULL, consumer, &c_id);\n\n    pthread_join(prod_tid, NULL);\n    pthread_join(cons_tid, NULL);\n\n    sem_destroy(&empty_slots);\n    sem_destroy(&full_slots);\n    pthread_mutex_destroy(&mutex);\n\n    printf(\"=== All items produced and consumed safely without race conditions. ===\\n\");\n    return 0;\n}\n",
        "compileCmd": "gcc -Wall producer_consumer.c -o producer_consumer -pthread",
        "runCmd": "./producer_consumer",
        "sampleInputs": [
          {
            "desc": "Scenario 1: Produce and consume 6 items with buffer size 5",
            "input": "6"
          },
          {
            "desc": "Scenario 2: Produce and consume 10 items (wrap-around test)",
            "input": "10"
          }
        ],
        "sampleOutputs": [
          {
            "desc": "Synchronized execution output (6 items)",
            "output": "Enter number of items per producer/consumer (e.g. 6): 6\n=== Bounded Buffer Synchronization (Size = 5) ===\n[Producer 1] Produced item 101 at slot 0\n    [Consumer 1] Consumed item 101 from slot 0\n[Producer 1] Produced item 102 at slot 1\n    [Consumer 1] Consumed item 102 from slot 1\n[Producer 1] Produced item 103 at slot 2\n[Producer 1] Produced item 104 at slot 3\n    [Consumer 1] Consumed item 103 from slot 2\n[Producer 1] Produced item 105 at slot 4\n[Producer 1] Produced item 106 at slot 0\n    [Consumer 1] Consumed item 104 from slot 3\n    [Consumer 1] Consumed item 105 from slot 4\n    [Consumer 1] Consumed item 106 from slot 0\n=== All items produced and consumed safely without race conditions. ==="
          },
          {
            "desc": "Circular buffer wrap-around output (10 items)",
            "output": "Enter number of items per producer/consumer (e.g. 6): 10\n=== Bounded Buffer Synchronization (Size = 5) ===\n[Producer 1] Produced item 101 at slot 0\n    [Consumer 1] Consumed item 101 from slot 0\n... (producer pauses automatically whenever 5 slots are full) ...\n[Producer 1] Produced item 110 at slot 4\n    [Consumer 1] Consumed item 110 from slot 4\n=== All items produced and consumed safely without race conditions. ==="
          }
        ]
      },
      "cpp": {
        "filename": "producer_consumer.cpp",
        "langLabel": "C++17 (std::mutex + condition_variable)",
        "source": "/*\n * Practical 05: Producer-Consumer Synchronization in C++17\n * Uses std::thread, std::mutex, and std::condition_variable (portable across C++11/14/17/20).\n * Compile: g++ -std=c++17 -Wall producer_consumer.cpp -o prod_cons_cpp -pthread\n * Run:     ./prod_cons_cpp\n */\n#include <iostream>\n#include <queue>\n#include <thread>\n#include <mutex>\n#include <condition_variable>\n#include <chrono>\n\nclass BoundedBuffer {\nprivate:\n    std::queue<int> buffer;\n    const size_t capacity;\n    std::mutex mtx;\n    std::condition_variable notFull;\n    std::condition_variable notEmpty;\n\npublic:\n    explicit BoundedBuffer(size_t cap) : capacity(cap) {}\n\n    void produce(int id, int item) {\n        std::unique_lock<std::mutex> lock(mtx);\n        notFull.wait(lock, [this]() { return buffer.size() < capacity; });\n\n        buffer.push(item);\n        std::cout << \"[Producer \" << id << \"] Produced: \" << item\n                  << \" | Buffer Count: \" << buffer.size() << \"/\" << capacity << \"\\n\";\n\n        notEmpty.notify_one();\n    }\n\n    int consume(int id) {\n        std::unique_lock<std::mutex> lock(mtx);\n        notEmpty.wait(lock, [this]() { return !buffer.empty(); });\n\n        int item = buffer.front();\n        buffer.pop();\n        std::cout << \"    [Consumer \" << id << \"] Consumed: \" << item\n                  << \" | Buffer Count: \" << buffer.size() << \"/\" << capacity << \"\\n\";\n\n        notFull.notify_one();\n        return item;\n    }\n};\n\nint main() {\n    int totalItems = 6;\n    std::cout << \"Enter number of items to produce/consume: \";\n    if (!(std::cin >> totalItems) || totalItems <= 0) totalItems = 6;\n\n    BoundedBuffer bb(4);\n\n    std::thread prod([&]() {\n        for (int i = 1; i <= totalItems; ++i) {\n            bb.produce(1, i * 10);\n            std::this_thread::sleep_for(std::chrono::milliseconds(80));\n        }\n    });\n\n    std::thread cons([&]() {\n        for (int i = 1; i <= totalItems; ++i) {\n            bb.consume(1);\n            std::this_thread::sleep_for(std::chrono::milliseconds(140));\n        }\n    });\n\n    prod.join();\n    cons.join();\n    std::cout << \"=== Synchronization complete. Zero deadlocks or race conditions. ===\\n\";\n    return 0;\n}\n",
        "compileCmd": "g++ -std=c++17 -Wall producer_consumer.cpp -o prod_cons_cpp -pthread",
        "runCmd": "./prod_cons_cpp",
        "sampleInputs": [
          {
            "desc": "Scenario 1: 6 items with buffer capacity 4",
            "input": "6"
          },
          {
            "desc": "Scenario 2: 8 items testing full-buffer blocking",
            "input": "8"
          }
        ],
        "sampleOutputs": [
          {
            "desc": "Output for 6 items",
            "output": "Enter number of items to produce/consume: 6\n[Producer 1] Produced: 10 | Buffer Count: 1/4\n    [Consumer 1] Consumed: 10 | Buffer Count: 0/4\n[Producer 1] Produced: 20 | Buffer Count: 1/4\n[Producer 1] Produced: 30 | Buffer Count: 2/4\n    [Consumer 1] Consumed: 20 | Buffer Count: 1/4\n[Producer 1] Produced: 40 | Buffer Count: 2/4\n[Producer 1] Produced: 50 | Buffer Count: 3/4\n    [Consumer 1] Consumed: 30 | Buffer Count: 2/4\n[Producer 1] Produced: 60 | Buffer Count: 3/4\n    [Consumer 1] Consumed: 40 | Buffer Count: 2/4\n    [Consumer 1] Consumed: 50 | Buffer Count: 1/4\n    [Consumer 1] Consumed: 60 | Buffer Count: 0/4\n=== Synchronization complete. Zero deadlocks or race conditions. ==="
          },
          {
            "desc": "Output for 8 items (buffer reaches 4/4 and blocks producer until consumed)",
            "output": "Enter number of items to produce/consume: 8\n[Producer 1] Produced: 10 | Buffer Count: 1/4\n...\n[Producer 1] Produced: 50 | Buffer Count: 4/4\n    [Consumer 1] Consumed: 20 | Buffer Count: 3/4\n[Producer 1] Produced: 60 | Buffer Count: 4/4\n...\n    [Consumer 1] Consumed: 80 | Buffer Count: 0/4\n=== Synchronization complete. Zero deadlocks or race conditions. ==="
          }
        ]
      },
      "python": {
        "filename": "producer_consumer.py",
        "langLabel": "Python (threading.Semaphore & Lock)",
        "source": "#!/usr/bin/env python3\n\"\"\"\nPractical 05: Producer-Consumer Synchronization in Python\nUses `threading.Semaphore`, `threading.Lock`, and `threading.Thread`.\nRun: python3 producer_consumer.py\n\"\"\"\nimport threading\nimport time\nfrom collections import deque\n\nBUFFER_CAPACITY = 4\nbuffer = deque()\nmutex = threading.Lock()\nempty_slots = threading.Semaphore(BUFFER_CAPACITY)\nfull_slots = threading.Semaphore(0)\n\ndef producer(prod_id, total_items):\n    for i in range(1, total_items + 1):\n        item = prod_id * 100 + i\n        empty_slots.acquire()\n        with mutex:\n            buffer.append(item)\n            print(f\"[Producer {prod_id}] Produced {item} | Buffer: {list(buffer)}\")\n        full_slots.release()\n        time.sleep(0.08)\n\ndef consumer(cons_id, total_items):\n    for _ in range(total_items):\n        full_slots.acquire()\n        with mutex:\n            item = buffer.popleft()\n            print(f\"    [Consumer {cons_id}] Consumed {item} | Buffer: {list(buffer)}\")\n        empty_slots.release()\n        time.sleep(0.14)\n\ndef main():\n    try:\n        n = int(input(\"Enter number of items to produce/consume (e.g. 6): \"))\n        if n <= 0:\n            n = 6\n    except ValueError:\n        n = 6\n\n    t_prod = threading.Thread(target=producer, args=(1, n))\n    t_cons = threading.Thread(target=consumer, args=(1, n))\n\n    print(f\"=== Python Producer-Consumer (Capacity={BUFFER_CAPACITY}) ===\")\n    t_prod.start()\n    t_cons.start()\n\n    t_prod.join()\n    t_cons.join()\n    print(\"=== Finished safely. ===\")\n\nif __name__ == \"__main__\":\n    main()\n",
        "compileCmd": "python3 -m py_compile producer_consumer.py",
        "runCmd": "python3 producer_consumer.py",
        "sampleInputs": [
          {
            "desc": "Scenario 1: 6 items",
            "input": "6"
          },
          {
            "desc": "Scenario 2: 5 items",
            "input": "5"
          }
        ],
        "sampleOutputs": [
          {
            "desc": "Synchronized queue output (6 items)",
            "output": "Enter number of items to produce/consume (e.g. 6): 6\n=== Python Producer-Consumer (Capacity=4) ===\n[Producer 1] Produced 101 | Buffer: [101]\n    [Consumer 1] Consumed 101 | Buffer: []\n[Producer 1] Produced 102 | Buffer: [102]\n[Producer 1] Produced 103 | Buffer: [102, 103]\n    [Consumer 1] Consumed 102 | Buffer: [103]\n[Producer 1] Produced 104 | Buffer: [103, 104]\n[Producer 1] Produced 105 | Buffer: [103, 104, 105]\n    [Consumer 1] Consumed 103 | Buffer: [104, 105]\n[Producer 1] Produced 106 | Buffer: [104, 105, 106]\n    [Consumer 1] Consumed 104 | Buffer: [105, 106]\n    [Consumer 1] Consumed 105 | Buffer: [106]\n    [Consumer 1] Consumed 106 | Buffer: []\n=== Finished safely. ==="
          },
          {
            "desc": "Synchronized queue output (5 items)",
            "output": "Enter number of items to produce/consume (e.g. 6): 5\n=== Python Producer-Consumer (Capacity=4) ===\n[Producer 1] Produced 101 | Buffer: [101]\n...\n    [Consumer 1] Consumed 105 | Buffer: []\n=== Finished safely. ==="
          }
        ]
      }
    }
  },
  {
    "id": 6,
    "number": "PR-06",
    "title": "Banker's Algorithm for Deadlock Avoidance",
    "category": "deadlock",
    "categoryLabel": "Deadlock Avoidance",
    "type": "coding",
    "aim": "To implement the Banker's Algorithm for deadlock avoidance, compute the Need matrix (Max - Allocation), determine Safe/Unsafe system states with safe sequence detection, and analyze how increasing or decreasing Available resources affects system safety.",
    "shortDesc": "Deadlock avoidance with Need matrix calculation, Safe/Unsafe detection, and resource modification tests.",
    "topics": [
      "Allocation Matrix",
      "Max Matrix",
      "Need = Max - Allocation",
      "Safety Algorithm",
      "Safe Sequence",
      "Resource Modification"
    ],
    "implCount": 3,
    "languages": [
      "c",
      "cpp",
      "python"
    ],
    "defaultLang": "c",
    "code": {
      "c": {
        "filename": "bankers.c",
        "langLabel": "C (GCC)",
        "source": "/*\n * Practical 06: Banker's Algorithm in C\n * Computes Need matrix, checks system safety, and tests resource delta (+/-).\n * Compile: gcc -Wall bankers.c -o bankers\n * Run:     ./bankers\n */\n#include <stdio.h>\n#include <stdbool.h>\n\n#define MAX_P 20\n#define MAX_R 10\n\nvoid print_matrices(int n, int m, int alloc[MAX_P][MAX_R], int max[MAX_P][MAX_R],\n                    int need[MAX_P][MAX_R], int avail[MAX_R]) {\n    printf(\"\\nProcess\\tAllocation\\tMax\\t\\tNeed\\n\");\n    for (int i = 0; i < n; i++) {\n        printf(\"P%d\\t\", i);\n        for (int j = 0; j < m; j++) printf(\"%d \", alloc[i][j]);\n        printf(\"\\t\\t\");\n        for (int j = 0; j < m; j++) printf(\"%d \", max[i][j]);\n        printf(\"\\t\\t\");\n        for (int j = 0; j < m; j++) printf(\"%d \", need[i][j]);\n        printf(\"\\n\");\n    }\n    printf(\"Available Resources: \");\n    for (int j = 0; j < m; j++) printf(\"%d \", avail[j]);\n    printf(\"\\n\");\n}\n\nbool check_safety(int n, int m, int alloc[MAX_P][MAX_R], int need[MAX_P][MAX_R],\n                  int avail[MAX_R], int safe_seq[MAX_P]) {\n    int work[MAX_R];\n    bool finish[MAX_P] = {false};\n\n    for (int j = 0; j < m; j++) work[j] = avail[j];\n\n    int count = 0;\n    while (count < n) {\n        bool found = false;\n        for (int i = 0; i < n; i++) {\n            if (!finish[i]) {\n                bool can_run = true;\n                for (int j = 0; j < m; j++) {\n                    if (need[i][j] > work[j]) {\n                        can_run = false;\n                        break;\n                    }\n                }\n                if (can_run) {\n                    for (int j = 0; j < m; j++) work[j] += alloc[i][j];\n                    safe_seq[count++] = i;\n                    finish[i] = true;\n                    found = true;\n                }\n            }\n        }\n        if (!found) {\n            return false; // System is in an UNSAFE state\n        }\n    }\n    return true;\n}\n\nint main() {\n    int n, m;\n    int alloc[MAX_P][MAX_R], max[MAX_P][MAX_R], need[MAX_P][MAX_R], avail[MAX_R];\n    int safe_seq[MAX_P];\n\n    printf(\"Enter number of processes and resource types: \");\n    if (scanf(\"%d %d\", &n, &m) != 2 || n <= 0 || m <= 0) return 1;\n\n    printf(\"Enter Allocation Matrix (%d x %d):\\n\", n, m);\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < m; j++)\n            scanf(\"%d\", &alloc[i][j]);\n\n    printf(\"Enter Max Demand Matrix (%d x %d):\\n\", n, m);\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < m; j++) {\n            scanf(\"%d\", &max[i][j]);\n            need[i][j] = max[i][j] - alloc[i][j];\n        }\n\n    printf(\"Enter Available Resources (%d values): \", m);\n    for (int j = 0; j < m; j++) scanf(\"%d\", &avail[j]);\n\n    print_matrices(n, m, alloc, max, need, avail);\n\n    if (check_safety(n, m, alloc, need, avail, safe_seq)) {\n        printf(\"\\n[RESULT] System is in a SAFE state.\\nSafe Sequence: \");\n        for (int i = 0; i < n; i++) {\n            printf(\"P%d%s\", safe_seq[i], (i < n - 1) ? \" -> \" : \"\\n\");\n        }\n    } else {\n        printf(\"\\n[RESULT] System is in an UNSAFE state! Potential deadlock.\\n\");\n    }\n\n    int mod_choice;\n    printf(\"\\nDo you want to modify Available resources to re-check safety? (1=Yes, 0=No): \");\n    if (scanf(\"%d\", &mod_choice) == 1 && mod_choice == 1) {\n        int delta[MAX_R];\n        printf(\"Enter change (+/-) for each of the %d resources (e.g., 1 0 2 or -2 0 -1): \", m);\n        for (int j = 0; j < m; j++) {\n            scanf(\"%d\", &delta[j]);\n            avail[j] += delta[j];\n            if (avail[j] < 0) avail[j] = 0;\n        }\n        printf(\"\\nUpdated Available Resources: \");\n        for (int j = 0; j < m; j++) printf(\"%d \", avail[j]);\n        printf(\"\\n\");\n\n        if (check_safety(n, m, alloc, need, avail, safe_seq)) {\n            printf(\"[MODIFIED RESULT] System is SAFE.\\nSafe Sequence: \");\n            for (int i = 0; i < n; i++) {\n                printf(\"P%d%s\", safe_seq[i], (i < n - 1) ? \" -> \" : \"\\n\");\n            }\n        } else {\n            printf(\"[MODIFIED RESULT] System is UNSAFE!\\n\");\n        }\n    }\n    return 0;\n}\n",
        "compileCmd": "gcc -Wall bankers.c -o bankers",
        "runCmd": "./bankers",
        "sampleInputs": [
          {
            "desc": "Test Case 1 (Safe State -> Decrease Available to Unsafe)",
            "input": "5 3\n0 1 0\n2 0 0\n3 0 2\n2 1 1\n0 0 2\n7 5 3\n3 2 2\n9 0 2\n2 2 2\n4 3 3\n3 3 2\n1\n-2 -2 -1"
          },
          {
            "desc": "Test Case 2 (Initially Unsafe State -> Increase Available to Safe)",
            "input": "3 3\n1 1 0\n2 0 1\n0 2 1\n3 3 2\n4 2 2\n2 3 3\n0 0 0\n1\n2 2 2"
          }
        ],
        "sampleOutputs": [
          {
            "desc": "Expected Output (Test Case 1: Safe -> Decreased to Unsafe)",
            "output": "Process\tAllocation\tMax\t\tNeed\nP0\t0 1 0 \t\t7 5 3 \t\t7 4 3 \nP1\t2 0 0 \t\t3 2 2 \t\t1 2 2 \nP2\t3 0 2 \t\t9 0 2 \t\t6 0 0 \nP3\t2 1 1 \t\t2 2 2 \t\t0 1 1 \nP4\t0 0 2 \t\t4 3 3 \t\t4 3 1 \nAvailable Resources: 3 3 2 \n\n[RESULT] System is in a SAFE state.\nSafe Sequence: P1 -> P3 -> P0 -> P2 -> P4\n\nUpdated Available Resources: 1 1 1 \n[MODIFIED RESULT] System is UNSAFE!"
          },
          {
            "desc": "Expected Output (Test Case 2: Unsafe -> Increased to Safe)",
            "output": "Process\tAllocation\tMax\t\tNeed\nP0\t1 1 0 \t\t3 3 2 \t\t2 2 2 \nP1\t2 0 1 \t\t4 2 2 \t\t2 2 1 \nP2\t0 2 1 \t\t2 3 3 \t\t2 1 2 \nAvailable Resources: 0 0 0 \n\n[RESULT] System is in an UNSAFE state! Potential deadlock.\n\nUpdated Available Resources: 2 2 2 \n[MODIFIED RESULT] System is SAFE.\nSafe Sequence: P0 -> P1 -> P2"
          }
        ]
      },
      "cpp": {
        "filename": "bankers.cpp",
        "langLabel": "C++ (G++ 17)",
        "source": "/*\n * Practical 06: Banker's Algorithm in C++\n * Compile: g++ -std=c++17 -Wall bankers.cpp -o bankers_cpp\n * Run:     ./bankers_cpp\n */\n#include <iostream>\n#include <vector>\n\nbool checkSafety(int n, int m, const std::vector<std::vector<int>>& alloc,\n                 const std::vector<std::vector<int>>& need,\n                 std::vector<int> work, std::vector<int>& safeSeq) {\n    std::vector<bool> finish(n, false);\n    safeSeq.clear();\n\n    while (static_cast<int>(safeSeq.size()) < n) {\n        bool found = false;\n        for (int i = 0; i < n; ++i) {\n            if (!finish[i]) {\n                bool ok = true;\n                for (int j = 0; j < m; ++j) {\n                    if (need[i][j] > work[j]) { ok = false; break; }\n                }\n                if (ok) {\n                    for (int j = 0; j < m; ++j) work[j] += alloc[i][j];\n                    safeSeq.push_back(i);\n                    finish[i] = true;\n                    found = true;\n                }\n            }\n        }\n        if (!found) return false;\n    }\n    return true;\n}\n\nint main() {\n    int n, m;\n    std::cout << \"Enter number of processes and resource types: \";\n    if (!(std::cin >> n >> m) || n <= 0 || m <= 0) return 1;\n\n    std::vector<std::vector<int>> alloc(n, std::vector<int>(m));\n    std::vector<std::vector<int>> maxD(n, std::vector<int>(m));\n    std::vector<std::vector<int>> need(n, std::vector<int>(m));\n    std::vector<int> avail(m);\n\n    std::cout << \"Enter Allocation Matrix:\\n\";\n    for (int i = 0; i < n; ++i)\n        for (int j = 0; j < m; ++j) std::cin >> alloc[i][j];\n\n    std::cout << \"Enter Max Demand Matrix:\\n\";\n    for (int i = 0; i < n; ++i)\n        for (int j = 0; j < m; ++j) {\n            std::cin >> maxD[i][j];\n            need[i][j] = maxD[i][j] - alloc[i][j];\n        }\n\n    std::cout << \"Enter Available Resources: \";\n    for (int j = 0; j < m; ++j) std::cin >> avail[j];\n\n    std::cout << \"\\nNeed Matrix:\\n\";\n    for (int i = 0; i < n; ++i) {\n        std::cout << \"P\" << i << \": \";\n        for (int j = 0; j < m; ++j) std::cout << need[i][j] << \" \";\n        std::cout << \"\\n\";\n    }\n\n    std::vector<int> safeSeq;\n    if (checkSafety(n, m, alloc, need, avail, safeSeq)) {\n        std::cout << \"\\n[RESULT] SAFE State. Sequence: \";\n        for (size_t i = 0; i < safeSeq.size(); ++i)\n            std::cout << \"P\" << safeSeq[i] << (i + 1 < safeSeq.size() ? \" -> \" : \"\\n\");\n    } else {\n        std::cout << \"\\n[RESULT] UNSAFE State!\\n\";\n    }\n\n    int mod;\n    std::cout << \"\\nModify Available resources? (1=Yes, 0=No): \";\n    if (std::cin >> mod && mod == 1) {\n        std::cout << \"Enter delta (+/-) for \" << m << \" resources: \";\n        for (int j = 0; j < m; ++j) {\n            int d; std::cin >> d;\n            avail[j] = std::max(0, avail[j] + d);\n        }\n        if (checkSafety(n, m, alloc, need, avail, safeSeq)) {\n            std::cout << \"[MODIFIED] SAFE State. Sequence: \";\n            for (size_t i = 0; i < safeSeq.size(); ++i)\n                std::cout << \"P\" << safeSeq[i] << (i + 1 < safeSeq.size() ? \" -> \" : \"\\n\");\n        } else {\n            std::cout << \"[MODIFIED] UNSAFE State!\\n\";\n        }\n    }\n    return 0;\n}\n",
        "compileCmd": "g++ -std=c++17 -Wall bankers.cpp -o bankers_cpp",
        "runCmd": "./bankers_cpp",
        "sampleInputs": [
          {
            "desc": "Test Case 1 (Safe State -> Decreased to Unsafe)",
            "input": "5 3\n0 1 0\n2 0 0\n3 0 2\n2 1 1\n0 0 2\n7 5 3\n3 2 2\n9 0 2\n2 2 2\n4 3 3\n3 3 2\n1\n-2 -2 -1"
          },
          {
            "desc": "Test Case 2 (Unsafe State -> Increased to Safe)",
            "input": "3 3\n1 1 0\n2 0 1\n0 2 1\n3 3 2\n4 2 2\n2 3 3\n0 0 0\n1\n2 2 2"
          }
        ],
        "sampleOutputs": [
          {
            "desc": "Expected Output (Test Case 1)",
            "output": "Need Matrix:\nP0: 7 4 3 \nP1: 1 2 2 \nP2: 6 0 0 \nP3: 0 1 1 \nP4: 4 3 1 \n\n[RESULT] SAFE State. Sequence: P1 -> P3 -> P0 -> P2 -> P4\n[MODIFIED] UNSAFE State!"
          },
          {
            "desc": "Expected Output (Test Case 2)",
            "output": "Need Matrix:\nP0: 2 2 2 \nP1: 2 2 1 \nP2: 2 1 2 \n\n[RESULT] UNSAFE State!\n[MODIFIED] SAFE State. Sequence: P0 -> P1 -> P2"
          }
        ]
      },
      "python": {
        "filename": "bankers.py",
        "langLabel": "Python 3",
        "source": "#!/usr/bin/env python3\n\"\"\"\nPractical 06: Banker's Algorithm in Python\nRun: python3 bankers.py\n\"\"\"\n\ndef is_safe(n, m, alloc, need, avail):\n    work = avail[:]\n    finish = [False] * n\n    safe_seq = []\n\n    while len(safe_seq) < n:\n        found = False\n        for i in range(n):\n            if not finish[i] and all(need[i][j] <= work[j] for j in range(m)):\n                for j in range(m):\n                    work[j] += alloc[i][j]\n                finish[i] = True\n                safe_seq.append(i)\n                found = True\n        if not found:\n            return False, []\n    return True, safe_seq\n\ndef main():\n    n, m = map(int, input(\"Enter processes and resource types (e.g. 5 3): \").split())\n    print(f\"Enter Allocation Matrix ({n} rows):\")\n    alloc = [list(map(int, input().split())) for _ in range(n)]\n    print(f\"Enter Max Demand Matrix ({n} rows):\")\n    max_d = [list(map(int, input().split())) for _ in range(n)]\n    avail = list(map(int, input(\"Enter Available Resources: \").split()))\n\n    need = [[max_d[i][j] - alloc[i][j] for j in range(m)] for i in range(n)]\n\n    print(\"\\nProcess\\tAllocation\\tMax\\t\\tNeed\")\n    for i in range(n):\n        print(f\"P{i}\\t{alloc[i]}\\t{max_d[i]}\\t{need[i]}\")\n    print(f\"Available: {avail}\")\n\n    safe, seq = is_safe(n, m, alloc, need, avail)\n    if safe:\n        print(\"\\n[RESULT] SAFE State. Sequence:\", \" -> \".join(f\"P{p}\" for p in seq))\n    else:\n        print(\"\\n[RESULT] UNSAFE State! Potential deadlock.\")\n\n    mod = int(input(\"\\nModify Available resources? (1=Yes, 0=No): \"))\n    if mod == 1:\n        delta = list(map(int, input(f\"Enter delta (+/-) for {m} resources: \").split()))\n        avail = [max(0, avail[j] + delta[j]) for j in range(m)]\n        print(\"Updated Available:\", avail)\n        safe, seq = is_safe(n, m, alloc, need, avail)\n        if safe:\n            print(\"[MODIFIED] SAFE State. Sequence:\", \" -> \".join(f\"P{p}\" for p in seq))\n        else:\n            print(\"[MODIFIED] UNSAFE State!\")\n\nif __name__ == \"__main__\":\n    main()\n",
        "compileCmd": "python3 -m py_compile bankers.py",
        "runCmd": "python3 bankers.py",
        "sampleInputs": [
          {
            "desc": "Test Case 1 (Safe State -> Decreased to Unsafe)",
            "input": "5 3\n0 1 0\n2 0 0\n3 0 2\n2 1 1\n0 0 2\n7 5 3\n3 2 2\n9 0 2\n2 2 2\n4 3 3\n3 3 2\n1\n-2 -2 -1"
          },
          {
            "desc": "Test Case 2 (Unsafe State -> Increased to Safe)",
            "input": "3 3\n1 1 0\n2 0 1\n0 2 1\n3 3 2\n4 2 2\n2 3 3\n0 0 0\n1\n2 2 2"
          }
        ],
        "sampleOutputs": [
          {
            "desc": "Expected Output (Test Case 1)",
            "output": "[RESULT] SAFE State. Sequence: P1 -> P3 -> P0 -> P2 -> P4\nUpdated Available: [1, 1, 1]\n[MODIFIED] UNSAFE State!"
          },
          {
            "desc": "Expected Output (Test Case 2)",
            "output": "[RESULT] UNSAFE State! Potential deadlock.\nUpdated Available: [2, 2, 2]\n[MODIFIED] SAFE State. Sequence: P0 -> P1 -> P2"
          }
        ]
      }
    }
  },
  {
    "id": 7,
    "number": "PR-07",
    "title": "Virtual Memory and Page Replacement (FIFO, LRU, Optimal)",
    "category": "memory",
    "categoryLabel": "Virtual Memory Management",
    "type": "coding_multi",
    "aim": "To implement demand paging and virtual memory page replacement algorithms — FIFO (First-In First-Out), LRU (Least Recently Used), and Optimal — tracking frame state transitions, page hits, and page faults.",
    "shortDesc": "Simulate FIFO, LRU, Optimal, and combined menu-driven page replacement in C, C++, and Python.",
    "topics": [
      "Demand Paging",
      "FIFO Queue",
      "LRU Recency",
      "Optimal Lookahead",
      "Page Faults & Hits"
    ],
    "implCount": 12,
    "languages": [
      "c",
      "cpp",
      "python"
    ],
    "defaultLang": "c",
    "algorithms": [
      {
        "key": "fifo",
        "label": "FIFO Standalone"
      },
      {
        "key": "lru",
        "label": "LRU Standalone"
      },
      {
        "key": "optimal",
        "label": "Optimal Standalone"
      },
      {
        "key": "combined",
        "label": "Combined Menu Program"
      }
    ],
    "defaultAlgo": "fifo",
    "code": {
      "c": {
        "fifo": {
          "filename": "fifo_pr.c",
          "langLabel": "C (GCC)",
          "source": "/*\n * Practical 07 (C - FIFO Standalone): First-In First-Out Page Replacement\n * Compile: gcc -Wall fifo_pr.c -o fifo_pr\n * Run:     ./fifo_pr\n */\n#include <stdio.h>\n\nint main() {\n    int n, frames_count;\n    printf(\"Enter length of page reference string: \");\n    if (scanf(\"%d\", &n) != 1 || n <= 0) return 1;\n\n    int pages[200];\n    printf(\"Enter page reference string: \");\n    for (int i = 0; i < n; i++) scanf(\"%d\", &pages[i]);\n\n    printf(\"Enter number of frames: \");\n    if (scanf(\"%d\", &frames_count) != 1 || frames_count <= 0) return 1;\n\n    int frames[50];\n    for (int i = 0; i < frames_count; i++) frames[i] = -1;\n\n    int next_replace = 0, faults = 0, hits = 0;\n\n    printf(\"\\n--- FIFO Page Replacement ---\\n\");\n    printf(\"Ref\\tFrames\\t\\tStatus\\n\");\n    for (int i = 0; i < n; i++) {\n        int page = pages[i], hit = 0;\n        for (int j = 0; j < frames_count; j++) {\n            if (frames[j] == page) { hit = 1; break; }\n        }\n        if (hit) {\n            hits++;\n        } else {\n            frames[next_replace] = page;\n            next_replace = (next_replace + 1) % frames_count;\n            faults++;\n        }\n\n        printf(\"%d\\t[\", page);\n        for (int j = 0; j < frames_count; j++) {\n            if (frames[j] == -1) printf(\" -\");\n            else printf(\" %d\", frames[j]);\n        }\n        printf(\" ]\\t%s\\n\", hit ? \"HIT\" : \"FAULT\");\n    }\n\n    printf(\"\\nTotal Page Faults: %d\\nTotal Page Hits  : %d\\n\", faults, hits);\n    printf(\"Fault Ratio      : %.2f%%\\n\", (faults * 100.0) / n);\n    return 0;\n}\n",
          "compileCmd": "gcc -Wall fifo_pr.c -o fifo_pr",
          "runCmd": "./fifo_pr",
          "sampleInputs": [
            {
              "desc": "Test Case 1: Classic 12-page string with 3 frames",
              "input": "12\n7 0 1 2 0 3 0 4 2 3 0 3\n3"
            },
            {
              "desc": "Test Case 2: 10-page string with 4 frames",
              "input": "10\n1 2 3 4 1 2 5 1 2 3\n4"
            }
          ],
          "sampleOutputs": [
            {
              "desc": "Expected FIFO Output (Test Case 1: 10 Faults, 2 Hits)",
              "output": "--- FIFO Page Replacement ---\nRef\tFrames\t\tStatus\n7\t[ 7 - - ]\tFAULT\n0\t[ 7 0 - ]\tFAULT\n1\t[ 7 0 1 ]\tFAULT\n2\t[ 2 0 1 ]\tFAULT\n0\t[ 2 0 1 ]\tHIT\n3\t[ 2 3 1 ]\tFAULT\n0\t[ 2 3 0 ]\tFAULT\n4\t[ 4 3 0 ]\tFAULT\n2\t[ 4 2 0 ]\tFAULT\n3\t[ 4 2 3 ]\tFAULT\n0\t[ 0 2 3 ]\tFAULT\n3\t[ 0 2 3 ]\tHIT\n\nTotal Page Faults: 10\nTotal Page Hits  : 2"
            },
            {
              "desc": "Expected FIFO Output (Test Case 2: 6 Faults, 4 Hits)",
              "output": "--- FIFO Page Replacement ---\nTotal Page Faults: 6\nTotal Page Hits  : 4"
            }
          ]
        },
        "lru": {
          "filename": "lru_pr.c",
          "langLabel": "C (GCC)",
          "source": "/*\n * Practical 07 (C - LRU Standalone): Least Recently Used Page Replacement\n * Compile: gcc -Wall lru_pr.c -o lru_pr\n * Run:     ./lru_pr\n */\n#include <stdio.h>\n\nint main() {\n    int n, frames_count;\n    printf(\"Enter length of page reference string: \");\n    if (scanf(\"%d\", &n) != 1 || n <= 0) return 1;\n\n    int pages[200];\n    printf(\"Enter page reference string: \");\n    for (int i = 0; i < n; i++) scanf(\"%d\", &pages[i]);\n\n    printf(\"Enter number of frames: \");\n    if (scanf(\"%d\", &frames_count) != 1 || frames_count <= 0) return 1;\n\n    int frames[50], last_used[50];\n    for (int i = 0; i < frames_count; i++) {\n        frames[i] = -1;\n        last_used[i] = -1;\n    }\n\n    int faults = 0, hits = 0;\n    printf(\"\\n--- LRU Page Replacement ---\\n\");\n    printf(\"Ref\\tFrames\\t\\tStatus\\n\");\n\n    for (int i = 0; i < n; i++) {\n        int page = pages[i], hit_idx = -1;\n        for (int j = 0; j < frames_count; j++) {\n            if (frames[j] == page) { hit_idx = j; break; }\n        }\n\n        if (hit_idx != -1) {\n            hits++;\n            last_used[hit_idx] = i;\n        } else {\n            int replace_idx = -1;\n            for (int j = 0; j < frames_count; j++) {\n                if (frames[j] == -1) { replace_idx = j; break; }\n            }\n            if (replace_idx == -1) {\n                replace_idx = 0;\n                for (int j = 1; j < frames_count; j++) {\n                    if (last_used[j] < last_used[replace_idx]) replace_idx = j;\n                }\n            }\n            frames[replace_idx] = page;\n            last_used[replace_idx] = i;\n            faults++;\n        }\n\n        printf(\"%d\\t[\", page);\n        for (int j = 0; j < frames_count; j++) {\n            if (frames[j] == -1) printf(\" -\");\n            else printf(\" %d\", frames[j]);\n        }\n        printf(\" ]\\t%s\\n\", (hit_idx != -1) ? \"HIT\" : \"FAULT\");\n    }\n\n    printf(\"\\nTotal Page Faults: %d\\nTotal Page Hits  : %d\\n\", faults, hits);\n    printf(\"Fault Ratio      : %.2f%%\\n\", (faults * 100.0) / n);\n    return 0;\n}\n",
          "compileCmd": "gcc -Wall lru_pr.c -o lru_pr",
          "runCmd": "./lru_pr",
          "sampleInputs": [
            {
              "desc": "Test Case 1: Classic 12-page string with 3 frames",
              "input": "12\n7 0 1 2 0 3 0 4 2 3 0 3\n3"
            },
            {
              "desc": "Test Case 2: 10-page string with 4 frames",
              "input": "10\n1 2 3 4 1 2 5 1 2 3\n4"
            }
          ],
          "sampleOutputs": [
            {
              "desc": "Expected LRU Output (Test Case 1: 9 Faults, 3 Hits)",
              "output": "--- LRU Page Replacement ---\nRef\tFrames\t\tStatus\n7\t[ 7 - - ]\tFAULT\n0\t[ 7 0 - ]\tFAULT\n1\t[ 7 0 1 ]\tFAULT\n2\t[ 2 0 1 ]\tFAULT\n0\t[ 2 0 1 ]\tHIT\n3\t[ 2 0 3 ]\tFAULT\n0\t[ 2 0 3 ]\tHIT\n4\t[ 4 0 3 ]\tFAULT\n2\t[ 4 0 2 ]\tFAULT\n3\t[ 4 3 2 ]\tFAULT\n0\t[ 0 3 2 ]\tFAULT\n3\t[ 0 3 2 ]\tHIT\n\nTotal Page Faults: 9\nTotal Page Hits  : 3"
            },
            {
              "desc": "Expected LRU Output (Test Case 2: 6 Faults, 4 Hits)",
              "output": "--- LRU Page Replacement ---\nTotal Page Faults: 6\nTotal Page Hits  : 4"
            }
          ]
        },
        "optimal": {
          "filename": "optimal_pr.c",
          "langLabel": "C (GCC)",
          "source": "/*\n * Practical 07 (C - Optimal Standalone): Optimal Page Replacement\n * Compile: gcc -Wall optimal_pr.c -o optimal_pr\n * Run:     ./optimal_pr\n */\n#include <stdio.h>\n\nint main() {\n    int n, frames_count;\n    printf(\"Enter length of page reference string: \");\n    if (scanf(\"%d\", &n) != 1 || n <= 0) return 1;\n\n    int pages[200];\n    printf(\"Enter page reference string: \");\n    for (int i = 0; i < n; i++) scanf(\"%d\", &pages[i]);\n\n    printf(\"Enter number of frames: \");\n    if (scanf(\"%d\", &frames_count) != 1 || frames_count <= 0) return 1;\n\n    int frames[50];\n    for (int i = 0; i < frames_count; i++) frames[i] = -1;\n\n    int faults = 0, hits = 0;\n    printf(\"\\n--- Optimal Page Replacement ---\\n\");\n    printf(\"Ref\\tFrames\\t\\tStatus\\n\");\n\n    for (int i = 0; i < n; i++) {\n        int page = pages[i], hit = 0;\n        for (int j = 0; j < frames_count; j++) {\n            if (frames[j] == page) { hit = 1; break; }\n        }\n\n        if (hit) {\n            hits++;\n        } else {\n            int replace_idx = -1;\n            for (int j = 0; j < frames_count; j++) {\n                if (frames[j] == -1) { replace_idx = j; break; }\n            }\n            if (replace_idx == -1) {\n                int farthest = -1;\n                replace_idx = 0;\n                for (int j = 0; j < frames_count; j++) {\n                    int next_use = n + 1;\n                    for (int k = i + 1; k < n; k++) {\n                        if (pages[k] == frames[j]) { next_use = k; break; }\n                    }\n                    if (next_use > farthest) {\n                        farthest = next_use;\n                        replace_idx = j;\n                    }\n                }\n            }\n            frames[replace_idx] = page;\n            faults++;\n        }\n\n        printf(\"%d\\t[\", page);\n        for (int j = 0; j < frames_count; j++) {\n            if (frames[j] == -1) printf(\" -\");\n            else printf(\" %d\", frames[j]);\n        }\n        printf(\" ]\\t%s\\n\", hit ? \"HIT\" : \"FAULT\");\n    }\n\n    printf(\"\\nTotal Page Faults: %d\\nTotal Page Hits  : %d\\n\", faults, hits);\n    printf(\"Fault Ratio      : %.2f%%\\n\", (faults * 100.0) / n);\n    return 0;\n}\n",
          "compileCmd": "gcc -Wall optimal_pr.c -o optimal_pr",
          "runCmd": "./optimal_pr",
          "sampleInputs": [
            {
              "desc": "Test Case 1: Classic 12-page string with 3 frames",
              "input": "12\n7 0 1 2 0 3 0 4 2 3 0 3\n3"
            },
            {
              "desc": "Test Case 2: 10-page string with 4 frames",
              "input": "10\n1 2 3 4 1 2 5 1 2 3\n4"
            }
          ],
          "sampleOutputs": [
            {
              "desc": "Expected Optimal Output (Test Case 1: 7 Faults, 5 Hits)",
              "output": "--- Optimal Page Replacement ---\nRef\tFrames\t\tStatus\n7\t[ 7 - - ]\tFAULT\n0\t[ 7 0 - ]\tFAULT\n1\t[ 7 0 1 ]\tFAULT\n2\t[ 2 0 1 ]\tFAULT\n0\t[ 2 0 1 ]\tHIT\n3\t[ 2 0 3 ]\tFAULT\n0\t[ 2 0 3 ]\tHIT\n4\t[ 2 4 3 ]\tFAULT\n2\t[ 2 4 3 ]\tHIT\n3\t[ 2 4 3 ]\tHIT\n0\t[ 0 4 3 ]\tFAULT\n3\t[ 0 4 3 ]\tHIT\n\nTotal Page Faults: 7\nTotal Page Hits  : 5"
            },
            {
              "desc": "Expected Optimal Output (Test Case 2: 5 Faults, 5 Hits)",
              "output": "--- Optimal Page Replacement ---\nTotal Page Faults: 5\nTotal Page Hits  : 5"
            }
          ]
        },
        "combined": {
          "filename": "page_rep_menu.c",
          "langLabel": "C (GCC)",
          "source": "/*\n * Practical 07 (C - Combined Menu-Driven): FIFO, LRU, Optimal Page Replacement\n * Compile: gcc -Wall page_rep_menu.c -o page_rep_menu\n * Run:     ./page_rep_menu\n */\n#include <stdio.h>\n\nvoid print_step(int page, int frames[], int fcount, int hit) {\n    printf(\"%d\\t[\", page);\n    for (int j = 0; j < fcount; j++) {\n        if (frames[j] == -1) printf(\" -\");\n        else printf(\" %d\", frames[j]);\n    }\n    printf(\" ]\\t%s\\n\", hit ? \"HIT\" : \"FAULT\");\n}\n\nvoid run_fifo(int pages[], int n, int fcount) {\n    int frames[50], next = 0, faults = 0, hits = 0;\n    for (int i = 0; i < fcount; i++) frames[i] = -1;\n    printf(\"\\n--- FIFO Page Replacement ---\\nRef\\tFrames\\t\\tStatus\\n\");\n    for (int i = 0; i < n; i++) {\n        int hit = 0;\n        for (int j = 0; j < fcount; j++) if (frames[j] == pages[i]) { hit = 1; break; }\n        if (hit) hits++;\n        else { frames[next] = pages[i]; next = (next + 1) % fcount; faults++; }\n        print_step(pages[i], frames, fcount, hit);\n    }\n    printf(\"Total Page Faults: %d | Total Hits: %d\\n\", faults, hits);\n}\n\nvoid run_lru(int pages[], int n, int fcount) {\n    int frames[50], last[50], faults = 0, hits = 0;\n    for (int i = 0; i < fcount; i++) { frames[i] = -1; last[i] = -1; }\n    printf(\"\\n--- LRU Page Replacement ---\\nRef\\tFrames\\t\\tStatus\\n\");\n    for (int i = 0; i < n; i++) {\n        int hit_idx = -1;\n        for (int j = 0; j < fcount; j++) if (frames[j] == pages[i]) { hit_idx = j; break; }\n        if (hit_idx != -1) { hits++; last[hit_idx] = i; }\n        else {\n            int rep = -1;\n            for (int j = 0; j < fcount; j++) if (frames[j] == -1) { rep = j; break; }\n            if (rep == -1) {\n                rep = 0;\n                for (int j = 1; j < fcount; j++) if (last[j] < last[rep]) rep = j;\n            }\n            frames[rep] = pages[i]; last[rep] = i; faults++;\n        }\n        print_step(pages[i], frames, fcount, hit_idx != -1);\n    }\n    printf(\"Total Page Faults: %d | Total Hits: %d\\n\", faults, hits);\n}\n\nvoid run_optimal(int pages[], int n, int fcount) {\n    int frames[50], faults = 0, hits = 0;\n    for (int i = 0; i < fcount; i++) frames[i] = -1;\n    printf(\"\\n--- Optimal Page Replacement ---\\nRef\\tFrames\\t\\tStatus\\n\");\n    for (int i = 0; i < n; i++) {\n        int hit = 0;\n        for (int j = 0; j < fcount; j++) if (frames[j] == pages[i]) { hit = 1; break; }\n        if (hit) hits++;\n        else {\n            int rep = -1;\n            for (int j = 0; j < fcount; j++) if (frames[j] == -1) { rep = j; break; }\n            if (rep == -1) {\n                int far = -1; rep = 0;\n                for (int j = 0; j < fcount; j++) {\n                    int nxt = n + 1;\n                    for (int k = i + 1; k < n; k++) if (pages[k] == frames[j]) { nxt = k; break; }\n                    if (nxt > far) { far = nxt; rep = j; }\n                }\n            }\n            frames[rep] = pages[i]; faults++;\n        }\n        print_step(pages[i], frames, fcount, hit);\n    }\n    printf(\"Total Page Faults: %d | Total Hits: %d\\n\", faults, hits);\n}\n\nint main() {\n    int n, fcount, pages[200], ch;\n    printf(\"Enter length of page reference string: \");\n    if (scanf(\"%d\", &n) != 1 || n <= 0) return 1;\n    printf(\"Enter page reference string: \");\n    for (int i = 0; i < n; i++) scanf(\"%d\", &pages[i]);\n    printf(\"Enter number of frames: \");\n    if (scanf(\"%d\", &fcount) != 1 || fcount <= 0) return 1;\n\n    do {\n        printf(\"\\n=== PAGE REPLACEMENT MENU ===\\n1. FIFO\\n2. LRU\\n3. Optimal\\n4. Exit\\nChoice: \");\n        if (scanf(\"%d\", &ch) != 1) break;\n        if (ch == 1) run_fifo(pages, n, fcount);\n        else if (ch == 2) run_lru(pages, n, fcount);\n        else if (ch == 3) run_optimal(pages, n, fcount);\n        else if (ch == 4) printf(\"Exiting.\\n\");\n    } while (ch != 4);\n    return 0;\n}\n",
          "compileCmd": "gcc -Wall page_rep_menu.c -o page_rep_menu",
          "runCmd": "./page_rep_menu",
          "sampleInputs": [
            {
              "desc": "Test Case 1: Compare FIFO (1), LRU (2), Optimal (3) on 12-page string",
              "input": "12\n7 0 1 2 0 3 0 4 2 3 0 3\n3\n1\n2\n3\n4"
            },
            {
              "desc": "Test Case 2: Compare all 3 on 8-page string with 3 frames",
              "input": "8\n1 3 0 3 5 6 3 1\n3\n1\n2\n3\n4"
            }
          ],
          "sampleOutputs": [
            {
              "desc": "Combined Comparison Summary (Test Case 1)",
              "output": "--- FIFO Page Replacement ---\nTotal Page Faults: 10 | Total Hits: 2\n\n--- LRU Page Replacement ---\nTotal Page Faults: 9 | Total Hits: 3\n\n--- Optimal Page Replacement ---\nTotal Page Faults: 7 | Total Hits: 5"
            },
            {
              "desc": "Combined Comparison Summary (Test Case 2)",
              "output": "--- FIFO Page Replacement ---\nTotal Page Faults: 6 | Total Hits: 2\n\n--- LRU Page Replacement ---\nTotal Page Faults: 5 | Total Hits: 3\n\n--- Optimal Page Replacement ---\nTotal Page Faults: 5 | Total Hits: 3"
            }
          ]
        }
      },
      "cpp": {
        "fifo": {
          "filename": "fifo_pr.cpp",
          "langLabel": "C++ (G++ 17)",
          "source": "/*\n * Practical 07 (C++ - FIFO Standalone)\n * Compile: g++ -std=c++17 -Wall fifo_pr.cpp -o fifo_cpp\n * Run:     ./fifo_cpp\n */\n#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <string>\n\nint main() {\n    int n, fcount;\n    std::cout << \"Enter length of page reference string: \";\n    if (!(std::cin >> n) || n <= 0) return 1;\n    std::vector<int> pages(n);\n    std::cout << \"Enter page reference string: \";\n    for (int i = 0; i < n; ++i) std::cin >> pages[i];\n    std::cout << \"Enter number of frames: \";\n    if (!(std::cin >> fcount) || fcount <= 0) return 1;\n\n    std::vector<int> frames(fcount, -1);\n    int next = 0, faults = 0, hits = 0;\n    std::cout << \"\\n--- FIFO Page Replacement ---\\nRef\\tFrames\\t\\tStatus\\n\";\n    for (int page : pages) {\n        bool hit = std::find(frames.begin(), frames.end(), page) != frames.end();\n        if (hit) ++hits;\n        else {\n            frames[next] = page;\n            next = (next + 1) % fcount;\n            ++faults;\n        }\n        std::cout << page << \"\\t[\";\n        for (int f : frames) std::cout << \" \" << (f == -1 ? \"-\" : std::to_string(f));\n        std::cout << \" ]\\t\" << (hit ? \"HIT\" : \"FAULT\") << \"\\n\";\n    }\n    std::cout << \"\\nTotal Page Faults: \" << faults << \"\\nTotal Page Hits  : \" << hits << \"\\n\";\n    return 0;\n}\n",
          "compileCmd": "g++ -std=c++17 -Wall fifo_pr.cpp -o fifo_cpp",
          "runCmd": "./fifo_cpp",
          "sampleInputs": [
            {
              "desc": "Test Case 1: Classic 12-page string with 3 frames",
              "input": "12\n7 0 1 2 0 3 0 4 2 3 0 3\n3"
            },
            {
              "desc": "Test Case 2: 10-page string with 4 frames",
              "input": "10\n1 2 3 4 1 2 5 1 2 3\n4"
            }
          ],
          "sampleOutputs": [
            {
              "desc": "Expected FIFO Output (Test Case 1: 10 Faults, 2 Hits)",
              "output": "--- FIFO Page Replacement ---\nRef\tFrames\t\tStatus\n7\t[ 7 - - ]\tFAULT\n0\t[ 7 0 - ]\tFAULT\n1\t[ 7 0 1 ]\tFAULT\n2\t[ 2 0 1 ]\tFAULT\n0\t[ 2 0 1 ]\tHIT\n3\t[ 2 3 1 ]\tFAULT\n0\t[ 2 3 0 ]\tFAULT\n4\t[ 4 3 0 ]\tFAULT\n2\t[ 4 2 0 ]\tFAULT\n3\t[ 4 2 3 ]\tFAULT\n0\t[ 0 2 3 ]\tFAULT\n3\t[ 0 2 3 ]\tHIT\n\nTotal Page Faults: 10\nTotal Page Hits  : 2"
            },
            {
              "desc": "Expected FIFO Output (Test Case 2: 6 Faults, 4 Hits)",
              "output": "--- FIFO Page Replacement ---\nTotal Page Faults: 6\nTotal Page Hits  : 4"
            }
          ]
        },
        "lru": {
          "filename": "lru_pr.cpp",
          "langLabel": "C++ (G++ 17)",
          "source": "/*\n * Practical 07 (C++ - LRU Standalone)\n * Compile: g++ -std=c++17 -Wall lru_pr.cpp -o lru_cpp\n * Run:     ./lru_cpp\n */\n#include <iostream>\n#include <vector>\n#include <string>\n\nint main() {\n    int n, fcount;\n    std::cout << \"Enter length of page reference string: \";\n    if (!(std::cin >> n) || n <= 0) return 1;\n    std::vector<int> pages(n);\n    std::cout << \"Enter page reference string: \";\n    for (int i = 0; i < n; ++i) std::cin >> pages[i];\n    std::cout << \"Enter number of frames: \";\n    if (!(std::cin >> fcount) || fcount <= 0) return 1;\n\n    std::vector<int> frames(fcount, -1), lastUsed(fcount, -1);\n    int faults = 0, hits = 0;\n    std::cout << \"\\n--- LRU Page Replacement ---\\nRef\\tFrames\\t\\tStatus\\n\";\n    for (int i = 0; i < n; ++i) {\n        int hitIdx = -1;\n        for (int j = 0; j < fcount; ++j) if (frames[j] == pages[i]) { hitIdx = j; break; }\n        if (hitIdx != -1) {\n            ++hits; lastUsed[hitIdx] = i;\n        } else {\n            int rep = -1;\n            for (int j = 0; j < fcount; ++j) if (frames[j] == -1) { rep = j; break; }\n            if (rep == -1) {\n                rep = 0;\n                for (int j = 1; j < fcount; ++j) if (lastUsed[j] < lastUsed[rep]) rep = j;\n            }\n            frames[rep] = pages[i]; lastUsed[rep] = i; ++faults;\n        }\n        std::cout << pages[i] << \"\\t[\";\n        for (int f : frames) std::cout << \" \" << (f == -1 ? \"-\" : std::to_string(f));\n        std::cout << \" ]\\t\" << (hitIdx != -1 ? \"HIT\" : \"FAULT\") << \"\\n\";\n    }\n    std::cout << \"\\nTotal Page Faults: \" << faults << \"\\nTotal Page Hits  : \" << hits << \"\\n\";\n    return 0;\n}\n",
          "compileCmd": "g++ -std=c++17 -Wall lru_pr.cpp -o lru_cpp",
          "runCmd": "./lru_cpp",
          "sampleInputs": [
            {
              "desc": "Test Case 1: Classic 12-page string with 3 frames",
              "input": "12\n7 0 1 2 0 3 0 4 2 3 0 3\n3"
            },
            {
              "desc": "Test Case 2: 10-page string with 4 frames",
              "input": "10\n1 2 3 4 1 2 5 1 2 3\n4"
            }
          ],
          "sampleOutputs": [
            {
              "desc": "Expected LRU Output (Test Case 1: 9 Faults, 3 Hits)",
              "output": "--- LRU Page Replacement ---\nRef\tFrames\t\tStatus\n7\t[ 7 - - ]\tFAULT\n0\t[ 7 0 - ]\tFAULT\n1\t[ 7 0 1 ]\tFAULT\n2\t[ 2 0 1 ]\tFAULT\n0\t[ 2 0 1 ]\tHIT\n3\t[ 2 0 3 ]\tFAULT\n0\t[ 2 0 3 ]\tHIT\n4\t[ 4 0 3 ]\tFAULT\n2\t[ 4 0 2 ]\tFAULT\n3\t[ 4 3 2 ]\tFAULT\n0\t[ 0 3 2 ]\tFAULT\n3\t[ 0 3 2 ]\tHIT\n\nTotal Page Faults: 9\nTotal Page Hits  : 3"
            },
            {
              "desc": "Expected LRU Output (Test Case 2: 6 Faults, 4 Hits)",
              "output": "--- LRU Page Replacement ---\nTotal Page Faults: 6\nTotal Page Hits  : 4"
            }
          ]
        },
        "optimal": {
          "filename": "optimal_pr.cpp",
          "langLabel": "C++ (G++ 17)",
          "source": "/*\n * Practical 07 (C++ - Optimal Standalone)\n * Compile: g++ -std=c++17 -Wall optimal_pr.cpp -o optimal_cpp\n * Run:     ./optimal_cpp\n */\n#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <string>\n\nint main() {\n    int n, fcount;\n    std::cout << \"Enter length of page reference string: \";\n    if (!(std::cin >> n) || n <= 0) return 1;\n    std::vector<int> pages(n);\n    std::cout << \"Enter page reference string: \";\n    for (int i = 0; i < n; ++i) std::cin >> pages[i];\n    std::cout << \"Enter number of frames: \";\n    if (!(std::cin >> fcount) || fcount <= 0) return 1;\n\n    std::vector<int> frames(fcount, -1);\n    int faults = 0, hits = 0;\n    std::cout << \"\\n--- Optimal Page Replacement ---\\nRef\\tFrames\\t\\tStatus\\n\";\n    for (int i = 0; i < n; ++i) {\n        bool hit = std::find(frames.begin(), frames.end(), pages[i]) != frames.end();\n        if (hit) ++hits;\n        else {\n            int rep = -1;\n            for (int j = 0; j < fcount; ++j) if (frames[j] == -1) { rep = j; break; }\n            if (rep == -1) {\n                int far = -1; rep = 0;\n                for (int j = 0; j < fcount; ++j) {\n                    int nxt = n + 1;\n                    for (int k = i + 1; k < n; ++k) if (pages[k] == frames[j]) { nxt = k; break; }\n                    if (nxt > far) { far = nxt; rep = j; }\n                }\n            }\n            frames[rep] = pages[i]; ++faults;\n        }\n        std::cout << pages[i] << \"\\t[\";\n        for (int f : frames) std::cout << \" \" << (f == -1 ? \"-\" : std::to_string(f));\n        std::cout << \" ]\\t\" << (hit ? \"HIT\" : \"FAULT\") << \"\\n\";\n    }\n    std::cout << \"\\nTotal Page Faults: \" << faults << \"\\nTotal Page Hits  : \" << hits << \"\\n\";\n    return 0;\n}\n",
          "compileCmd": "g++ -std=c++17 -Wall optimal_pr.cpp -o optimal_cpp",
          "runCmd": "./optimal_cpp",
          "sampleInputs": [
            {
              "desc": "Test Case 1: Classic 12-page string with 3 frames",
              "input": "12\n7 0 1 2 0 3 0 4 2 3 0 3\n3"
            },
            {
              "desc": "Test Case 2: 10-page string with 4 frames",
              "input": "10\n1 2 3 4 1 2 5 1 2 3\n4"
            }
          ],
          "sampleOutputs": [
            {
              "desc": "Expected Optimal Output (Test Case 1: 7 Faults, 5 Hits)",
              "output": "--- Optimal Page Replacement ---\nRef\tFrames\t\tStatus\n7\t[ 7 - - ]\tFAULT\n0\t[ 7 0 - ]\tFAULT\n1\t[ 7 0 1 ]\tFAULT\n2\t[ 2 0 1 ]\tFAULT\n0\t[ 2 0 1 ]\tHIT\n3\t[ 2 0 3 ]\tFAULT\n0\t[ 2 0 3 ]\tHIT\n4\t[ 2 4 3 ]\tFAULT\n2\t[ 2 4 3 ]\tHIT\n3\t[ 2 4 3 ]\tHIT\n0\t[ 0 4 3 ]\tFAULT\n3\t[ 0 4 3 ]\tHIT\n\nTotal Page Faults: 7\nTotal Page Hits  : 5"
            },
            {
              "desc": "Expected Optimal Output (Test Case 2: 5 Faults, 5 Hits)",
              "output": "--- Optimal Page Replacement ---\nTotal Page Faults: 5\nTotal Page Hits  : 5"
            }
          ]
        },
        "combined": {
          "filename": "page_rep_menu.cpp",
          "langLabel": "C++ (G++ 17)",
          "source": "/*\n * Practical 07 (C++ - Combined Menu-Driven): FIFO, LRU, Optimal\n * Compile: g++ -std=c++17 -Wall page_rep_menu.cpp -o page_rep_menu_cpp\n * Run:     ./page_rep_menu_cpp\n */\n#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <string>\n\nvoid printStep(int page, const std::vector<int>& frames, bool hit) {\n    std::cout << page << \"\\t[\";\n    for (int f : frames) std::cout << \" \" << (f == -1 ? \"-\" : std::to_string(f));\n    std::cout << \" ]\\t\" << (hit ? \"HIT\" : \"FAULT\") << \"\\n\";\n}\n\nvoid runFIFO(const std::vector<int>& pages, int fcount) {\n    std::vector<int> frames(fcount, -1);\n    int next = 0, faults = 0, hits = 0;\n    std::cout << \"\\n--- FIFO Page Replacement ---\\nRef\\tFrames\\t\\tStatus\\n\";\n    for (int p : pages) {\n        bool hit = std::find(frames.begin(), frames.end(), p) != frames.end();\n        if (hit) ++hits;\n        else { frames[next] = p; next = (next + 1) % fcount; ++faults; }\n        printStep(p, frames, hit);\n    }\n    std::cout << \"Total Page Faults: \" << faults << \" | Total Hits: \" << hits << \"\\n\";\n}\n\nvoid runLRU(const std::vector<int>& pages, int fcount) {\n    std::vector<int> frames(fcount, -1), last(fcount, -1);\n    int faults = 0, hits = 0;\n    std::cout << \"\\n--- LRU Page Replacement ---\\nRef\\tFrames\\t\\tStatus\\n\";\n    for (size_t i = 0; i < pages.size(); ++i) {\n        int hitIdx = -1;\n        for (int j = 0; j < fcount; ++j) if (frames[j] == pages[i]) { hitIdx = j; break; }\n        if (hitIdx != -1) { ++hits; last[hitIdx] = static_cast<int>(i); }\n        else {\n            int rep = -1;\n            for (int j = 0; j < fcount; ++j) if (frames[j] == -1) { rep = j; break; }\n            if (rep == -1) {\n                rep = 0;\n                for (int j = 1; j < fcount; ++j) if (last[j] < last[rep]) rep = j;\n            }\n            frames[rep] = pages[i]; last[rep] = static_cast<int>(i); ++faults;\n        }\n        printStep(pages[i], frames, hitIdx != -1);\n    }\n    std::cout << \"Total Page Faults: \" << faults << \" | Total Hits: \" << hits << \"\\n\";\n}\n\nvoid runOptimal(const std::vector<int>& pages, int fcount) {\n    int n = static_cast<int>(pages.size()), faults = 0, hits = 0;\n    std::vector<int> frames(fcount, -1);\n    std::cout << \"\\n--- Optimal Page Replacement ---\\nRef\\tFrames\\t\\tStatus\\n\";\n    for (int i = 0; i < n; ++i) {\n        bool hit = std::find(frames.begin(), frames.end(), pages[i]) != frames.end();\n        if (hit) ++hits;\n        else {\n            int rep = -1;\n            for (int j = 0; j < fcount; ++j) if (frames[j] == -1) { rep = j; break; }\n            if (rep == -1) {\n                int far = -1; rep = 0;\n                for (int j = 0; j < fcount; ++j) {\n                    int nxt = n + 1;\n                    for (int k = i + 1; k < n; ++k) if (pages[k] == frames[j]) { nxt = k; break; }\n                    if (nxt > far) { far = nxt; rep = j; }\n                }\n            }\n            frames[rep] = pages[i]; ++faults;\n        }\n        printStep(pages[i], frames, hit);\n    }\n    std::cout << \"Total Page Faults: \" << faults << \" | Total Hits: \" << hits << \"\\n\";\n}\n\nint main() {\n    int n, fcount, ch;\n    std::cout << \"Enter length of page reference string: \";\n    if (!(std::cin >> n) || n <= 0) return 1;\n    std::vector<int> pages(n);\n    std::cout << \"Enter page reference string: \";\n    for (int i = 0; i < n; ++i) std::cin >> pages[i];\n    std::cout << \"Enter number of frames: \";\n    if (!(std::cin >> fcount) || fcount <= 0) return 1;\n\n    do {\n        std::cout << \"\\n=== PAGE REPLACEMENT MENU ===\\n1. FIFO\\n2. LRU\\n3. Optimal\\n4. Exit\\nChoice: \";\n        if (!(std::cin >> ch)) break;\n        if (ch == 1) runFIFO(pages, fcount);\n        else if (ch == 2) runLRU(pages, fcount);\n        else if (ch == 3) runOptimal(pages, fcount);\n    } while (ch != 4);\n    return 0;\n}\n",
          "compileCmd": "g++ -std=c++17 -Wall page_rep_menu.cpp -o page_rep_menu_cpp",
          "runCmd": "./page_rep_menu_cpp",
          "sampleInputs": [
            {
              "desc": "Test Case 1: Compare FIFO (1), LRU (2), Optimal (3) on 12-page string",
              "input": "12\n7 0 1 2 0 3 0 4 2 3 0 3\n3\n1\n2\n3\n4"
            },
            {
              "desc": "Test Case 2: Compare all 3 on 8-page string with 3 frames",
              "input": "8\n1 3 0 3 5 6 3 1\n3\n1\n2\n3\n4"
            }
          ],
          "sampleOutputs": [
            {
              "desc": "Combined Comparison Summary (Test Case 1)",
              "output": "--- FIFO Page Replacement ---\nTotal Page Faults: 10 | Total Hits: 2\n\n--- LRU Page Replacement ---\nTotal Page Faults: 9 | Total Hits: 3\n\n--- Optimal Page Replacement ---\nTotal Page Faults: 7 | Total Hits: 5"
            },
            {
              "desc": "Combined Comparison Summary (Test Case 2)",
              "output": "--- FIFO Page Replacement ---\nTotal Page Faults: 6 | Total Hits: 2\n\n--- LRU Page Replacement ---\nTotal Page Faults: 5 | Total Hits: 3\n\n--- Optimal Page Replacement ---\nTotal Page Faults: 5 | Total Hits: 3"
            }
          ]
        }
      },
      "python": {
        "fifo": {
          "filename": "fifo_pr.py",
          "langLabel": "Python 3",
          "source": "#!/usr/bin/env python3\n\"\"\"Practical 07 (Python - FIFO Standalone) | Run: python3 fifo_pr.py\"\"\"\n\ndef fifo():\n    n = int(input(\"Enter length of page reference string: \"))\n    pages = list(map(int, input(\"Enter page reference string: \").split()))[:n]\n    fcount = int(input(\"Enter number of frames: \"))\n\n    frames = [-1] * fcount\n    nxt, faults, hits = 0, 0, 0\n    print(\"\\n--- FIFO Page Replacement ---\\nRef\\tFrames\\t\\tStatus\")\n    for p in pages:\n        hit = p in frames\n        if hit:\n            hits += 1\n        else:\n            frames[nxt] = p\n            nxt = (nxt + 1) % fcount\n            faults += 1\n        fstr = \" \".join(\"-\" if x == -1 else str(x) for x in frames)\n        print(f\"{p}\\t[ {fstr} ]\\t{'HIT' if hit else 'FAULT'}\")\n    print(f\"\\nTotal Page Faults: {faults}\\nTotal Page Hits  : {hits}\")\n\nif __name__ == \"__main__\":\n    fifo()\n",
          "compileCmd": "python3 -m py_compile fifo_pr.py",
          "runCmd": "python3 fifo_pr.py",
          "sampleInputs": [
            {
              "desc": "Test Case 1: Classic 12-page string with 3 frames",
              "input": "12\n7 0 1 2 0 3 0 4 2 3 0 3\n3"
            },
            {
              "desc": "Test Case 2: 10-page string with 4 frames",
              "input": "10\n1 2 3 4 1 2 5 1 2 3\n4"
            }
          ],
          "sampleOutputs": [
            {
              "desc": "Expected FIFO Output (Test Case 1: 10 Faults, 2 Hits)",
              "output": "--- FIFO Page Replacement ---\nRef\tFrames\t\tStatus\n7\t[ 7 - - ]\tFAULT\n0\t[ 7 0 - ]\tFAULT\n1\t[ 7 0 1 ]\tFAULT\n2\t[ 2 0 1 ]\tFAULT\n0\t[ 2 0 1 ]\tHIT\n3\t[ 2 3 1 ]\tFAULT\n0\t[ 2 3 0 ]\tFAULT\n4\t[ 4 3 0 ]\tFAULT\n2\t[ 4 2 0 ]\tFAULT\n3\t[ 4 2 3 ]\tFAULT\n0\t[ 0 2 3 ]\tFAULT\n3\t[ 0 2 3 ]\tHIT\n\nTotal Page Faults: 10\nTotal Page Hits  : 2"
            },
            {
              "desc": "Expected FIFO Output (Test Case 2: 6 Faults, 4 Hits)",
              "output": "--- FIFO Page Replacement ---\nTotal Page Faults: 6\nTotal Page Hits  : 4"
            }
          ]
        },
        "lru": {
          "filename": "lru_pr.py",
          "langLabel": "Python 3",
          "source": "#!/usr/bin/env python3\n\"\"\"Practical 07 (Python - LRU Standalone) | Run: python3 lru_pr.py\"\"\"\n\ndef lru():\n    n = int(input(\"Enter length of page reference string: \"))\n    pages = list(map(int, input(\"Enter page reference string: \").split()))[:n]\n    fcount = int(input(\"Enter number of frames: \"))\n\n    frames = [-1] * fcount\n    last_used = [-1] * fcount\n    faults, hits = 0, 0\n    print(\"\\n--- LRU Page Replacement ---\\nRef\\tFrames\\t\\tStatus\")\n    for i, p in enumerate(pages):\n        if p in frames:\n            hits += 1\n            last_used[frames.index(p)] = i\n            hit = True\n        else:\n            hit = False\n            if -1 in frames:\n                rep = frames.index(-1)\n            else:\n                rep = min(range(fcount), key=lambda j: last_used[j])\n            frames[rep] = p\n            last_used[rep] = i\n            faults += 1\n        fstr = \" \".join(\"-\" if x == -1 else str(x) for x in frames)\n        print(f\"{p}\\t[ {fstr} ]\\t{'HIT' if hit else 'FAULT'}\")\n    print(f\"\\nTotal Page Faults: {faults}\\nTotal Page Hits  : {hits}\")\n\nif __name__ == \"__main__\":\n    lru()\n",
          "compileCmd": "python3 -m py_compile lru_pr.py",
          "runCmd": "python3 lru_pr.py",
          "sampleInputs": [
            {
              "desc": "Test Case 1: Classic 12-page string with 3 frames",
              "input": "12\n7 0 1 2 0 3 0 4 2 3 0 3\n3"
            },
            {
              "desc": "Test Case 2: 10-page string with 4 frames",
              "input": "10\n1 2 3 4 1 2 5 1 2 3\n4"
            }
          ],
          "sampleOutputs": [
            {
              "desc": "Expected LRU Output (Test Case 1: 9 Faults, 3 Hits)",
              "output": "--- LRU Page Replacement ---\nRef\tFrames\t\tStatus\n7\t[ 7 - - ]\tFAULT\n0\t[ 7 0 - ]\tFAULT\n1\t[ 7 0 1 ]\tFAULT\n2\t[ 2 0 1 ]\tFAULT\n0\t[ 2 0 1 ]\tHIT\n3\t[ 2 0 3 ]\tFAULT\n0\t[ 2 0 3 ]\tHIT\n4\t[ 4 0 3 ]\tFAULT\n2\t[ 4 0 2 ]\tFAULT\n3\t[ 4 3 2 ]\tFAULT\n0\t[ 0 3 2 ]\tFAULT\n3\t[ 0 3 2 ]\tHIT\n\nTotal Page Faults: 9\nTotal Page Hits  : 3"
            },
            {
              "desc": "Expected LRU Output (Test Case 2: 6 Faults, 4 Hits)",
              "output": "--- LRU Page Replacement ---\nTotal Page Faults: 6\nTotal Page Hits  : 4"
            }
          ]
        },
        "optimal": {
          "filename": "optimal_pr.py",
          "langLabel": "Python 3",
          "source": "#!/usr/bin/env python3\n\"\"\"Practical 07 (Python - Optimal Standalone) | Run: python3 optimal_pr.py\"\"\"\n\ndef optimal():\n    n = int(input(\"Enter length of page reference string: \"))\n    pages = list(map(int, input(\"Enter page reference string: \").split()))[:n]\n    fcount = int(input(\"Enter number of frames: \"))\n\n    frames = [-1] * fcount\n    faults, hits = 0, 0\n    print(\"\\n--- Optimal Page Replacement ---\\nRef\\tFrames\\t\\tStatus\")\n    for i, p in enumerate(pages):\n        if p in frames:\n            hits += 1\n            hit = True\n        else:\n            hit = False\n            if -1 in frames:\n                rep = frames.index(-1)\n            else:\n                future = pages[i + 1:]\n                rep = max(range(fcount), key=lambda j: future.index(frames[j]) if frames[j] in future else len(pages) + 1)\n            frames[rep] = p\n            faults += 1\n        fstr = \" \".join(\"-\" if x == -1 else str(x) for x in frames)\n        print(f\"{p}\\t[ {fstr} ]\\t{'HIT' if hit else 'FAULT'}\")\n    print(f\"\\nTotal Page Faults: {faults}\\nTotal Page Hits  : {hits}\")\n\nif __name__ == \"__main__\":\n    optimal()\n",
          "compileCmd": "python3 -m py_compile optimal_pr.py",
          "runCmd": "python3 optimal_pr.py",
          "sampleInputs": [
            {
              "desc": "Test Case 1: Classic 12-page string with 3 frames",
              "input": "12\n7 0 1 2 0 3 0 4 2 3 0 3\n3"
            },
            {
              "desc": "Test Case 2: 10-page string with 4 frames",
              "input": "10\n1 2 3 4 1 2 5 1 2 3\n4"
            }
          ],
          "sampleOutputs": [
            {
              "desc": "Expected Optimal Output (Test Case 1: 7 Faults, 5 Hits)",
              "output": "--- Optimal Page Replacement ---\nRef\tFrames\t\tStatus\n7\t[ 7 - - ]\tFAULT\n0\t[ 7 0 - ]\tFAULT\n1\t[ 7 0 1 ]\tFAULT\n2\t[ 2 0 1 ]\tFAULT\n0\t[ 2 0 1 ]\tHIT\n3\t[ 2 0 3 ]\tFAULT\n0\t[ 2 0 3 ]\tHIT\n4\t[ 2 4 3 ]\tFAULT\n2\t[ 2 4 3 ]\tHIT\n3\t[ 2 4 3 ]\tHIT\n0\t[ 0 4 3 ]\tFAULT\n3\t[ 0 4 3 ]\tHIT\n\nTotal Page Faults: 7\nTotal Page Hits  : 5"
            },
            {
              "desc": "Expected Optimal Output (Test Case 2: 5 Faults, 5 Hits)",
              "output": "--- Optimal Page Replacement ---\nTotal Page Faults: 5\nTotal Page Hits  : 5"
            }
          ]
        },
        "combined": {
          "filename": "page_rep_menu.py",
          "langLabel": "Python 3",
          "source": "#!/usr/bin/env python3\n\"\"\"Practical 07 (Python - Combined Menu-Driven): FIFO, LRU, Optimal | Run: python3 page_rep_menu.py\"\"\"\n\ndef run_fifo(pages, fcount):\n    frames, nxt, faults, hits = [-1] * fcount, 0, 0, 0\n    print(\"\\n--- FIFO Page Replacement ---\\nRef\\tFrames\\t\\tStatus\")\n    for p in pages:\n        hit = p in frames\n        if hit: hits += 1\n        else: frames[nxt] = p; nxt = (nxt + 1) % fcount; faults += 1\n        print(f\"{p}\\t[ {' '.join('-' if x == -1 else str(x) for x in frames)} ]\\t{'HIT' if hit else 'FAULT'}\")\n    print(f\"Total Page Faults: {faults} | Total Hits: {hits}\")\n\ndef run_lru(pages, fcount):\n    frames, last, faults, hits = [-1] * fcount, [-1] * fcount, 0, 0\n    print(\"\\n--- LRU Page Replacement ---\\nRef\\tFrames\\t\\tStatus\")\n    for i, p in enumerate(pages):\n        if p in frames:\n            hits += 1; last[frames.index(p)] = i; hit = True\n        else:\n            hit = False\n            rep = frames.index(-1) if -1 in frames else min(range(fcount), key=lambda j: last[j])\n            frames[rep] = p; last[rep] = i; faults += 1\n        print(f\"{p}\\t[ {' '.join('-' if x == -1 else str(x) for x in frames)} ]\\t{'HIT' if hit else 'FAULT'}\")\n    print(f\"Total Page Faults: {faults} | Total Hits: {hits}\")\n\ndef run_optimal(pages, fcount):\n    frames, faults, hits = [-1] * fcount, 0, 0\n    print(\"\\n--- Optimal Page Replacement ---\\nRef\\tFrames\\t\\tStatus\")\n    for i, p in enumerate(pages):\n        if p in frames:\n            hits += 1; hit = True\n        else:\n            hit = False\n            if -1 in frames: rep = frames.index(-1)\n            else:\n                future = pages[i + 1:]\n                rep = max(range(fcount), key=lambda j: future.index(frames[j]) if frames[j] in future else len(pages) + 1)\n            frames[rep] = p; faults += 1\n        print(f\"{p}\\t[ {' '.join('-' if x == -1 else str(x) for x in frames)} ]\\t{'HIT' if hit else 'FAULT'}\")\n    print(f\"Total Page Faults: {faults} | Total Hits: {hits}\")\n\ndef main():\n    n = int(input(\"Enter length of page reference string: \"))\n    pages = list(map(int, input(\"Enter page reference string: \").split()))[:n]\n    fcount = int(input(\"Enter number of frames: \"))\n    while True:\n        ch = int(input(\"\\n=== PAGE REPLACEMENT MENU ===\\n1. FIFO\\n2. LRU\\n3. Optimal\\n4. Exit\\nChoice: \"))\n        if ch == 1: run_fifo(pages, fcount)\n        elif ch == 2: run_lru(pages, fcount)\n        elif ch == 3: run_optimal(pages, fcount)\n        elif ch == 4: break\n\nif __name__ == \"__main__\":\n    main()\n",
          "compileCmd": "python3 -m py_compile page_rep_menu.py",
          "runCmd": "python3 page_rep_menu.py",
          "sampleInputs": [
            {
              "desc": "Test Case 1: Compare FIFO (1), LRU (2), Optimal (3) on 12-page string",
              "input": "12\n7 0 1 2 0 3 0 4 2 3 0 3\n3\n1\n2\n3\n4"
            },
            {
              "desc": "Test Case 2: Compare all 3 on 8-page string with 3 frames",
              "input": "8\n1 3 0 3 5 6 3 1\n3\n1\n2\n3\n4"
            }
          ],
          "sampleOutputs": [
            {
              "desc": "Combined Comparison Summary (Test Case 1)",
              "output": "--- FIFO Page Replacement ---\nTotal Page Faults: 10 | Total Hits: 2\n\n--- LRU Page Replacement ---\nTotal Page Faults: 9 | Total Hits: 3\n\n--- Optimal Page Replacement ---\nTotal Page Faults: 7 | Total Hits: 5"
            },
            {
              "desc": "Combined Comparison Summary (Test Case 2)",
              "output": "--- FIFO Page Replacement ---\nTotal Page Faults: 6 | Total Hits: 2\n\n--- LRU Page Replacement ---\nTotal Page Faults: 5 | Total Hits: 3\n\n--- Optimal Page Replacement ---\nTotal Page Faults: 5 | Total Hits: 3"
            }
          ]
        }
      }
    }
  },
  {
    "id": 8,
    "number": "PR-08",
    "title": "File System Implementation (Inode and FAT Simulation)",
    "category": "filesystem",
    "categoryLabel": "File System Architecture",
    "type": "coding",
    "aim": "To design and implement a safe, in-memory educational File System simulator supporting Create, Write, Read, Delete, List, Metadata inspection, and Storage Usage reporting using both Inode metadata structures and File Allocation Table (FAT) block chaining.",
    "shortDesc": "Safe in-memory simulated filesystem demonstrating Inode metadata tables, FAT block chains, and CRUD file ops.",
    "topics": [
      "Inode Structure",
      "FAT Block Chains",
      "Virtual Disk Blocks",
      "File Metadata",
      "Storage Allocation Map"
    ],
    "implCount": 3,
    "languages": [
      "c",
      "cpp",
      "python"
    ],
    "defaultLang": "c",
    "code": {
      "c": {
        "filename": "filesystem_sim.c",
        "langLabel": "C (Inode + FAT In-Memory Sim)",
        "source": "/*\n * Practical 08: Educational In-Memory File System Simulator in C\n * Simulates Inode metadata + FAT block-chain allocation safely in RAM.\n * Does NOT touch real disk files.\n * Compile: gcc -Wall filesystem_sim.c -o filesystem_sim\n * Run:     ./filesystem_sim\n */\n#include <stdio.h>\n#include <string.h>\n\n#define TOTAL_BLOCKS 32\n#define BLOCK_SIZE 16\n#define MAX_FILES 16\n#define FAT_FREE -1\n#define FAT_EOF  -2\n\ntypedef struct {\n    int inode_id;\n    char name[32];\n    int size;\n    int start_block;\n    int used;\n} Inode;\n\nchar disk_blocks[TOTAL_BLOCKS][BLOCK_SIZE];\nint fat[TOTAL_BLOCKS];\nInode inodes[MAX_FILES];\n\nvoid init_fs() {\n    for (int i = 0; i < TOTAL_BLOCKS; i++) {\n        fat[i] = FAT_FREE;\n        memset(disk_blocks[i], 0, BLOCK_SIZE);\n    }\n    for (int i = 0; i < MAX_FILES; i++) {\n        inodes[i].used = 0;\n        inodes[i].inode_id = i + 100;\n        inodes[i].start_block = -1;\n        inodes[i].size = 0;\n    }\n}\n\nint find_file(const char *name) {\n    for (int i = 0; i < MAX_FILES; i++) {\n        if (inodes[i].used && strcmp(inodes[i].name, name) == 0) return i;\n    }\n    return -1;\n}\n\nint alloc_free_block() {\n    for (int i = 0; i < TOTAL_BLOCKS; i++) {\n        if (fat[i] == FAT_FREE) return i;\n    }\n    return -1;\n}\n\nvoid create_file(const char *name) {\n    if (find_file(name) != -1) {\n        printf(\"[Error] File '%s' already exists.\\n\", name);\n        return;\n    }\n    for (int i = 0; i < MAX_FILES; i++) {\n        if (!inodes[i].used) {\n            inodes[i].used = 1;\n            strncpy(inodes[i].name, name, 31);\n            inodes[i].name[31] = '\\0';\n            inodes[i].size = 0;\n            inodes[i].start_block = FAT_EOF;\n            printf(\"[Created] File '%s' assigned Inode #%d.\\n\", name, inodes[i].inode_id);\n            return;\n        }\n    }\n    printf(\"[Error] Inode table full.\\n\");\n}\n\nvoid free_chain(int start) {\n    int curr = start;\n    while (curr >= 0 && curr < TOTAL_BLOCKS) {\n        int next = fat[curr];\n        fat[curr] = FAT_FREE;\n        memset(disk_blocks[curr], 0, BLOCK_SIZE);\n        curr = next;\n    }\n}\n\nvoid write_file(const char *name, const char *data) {\n    int idx = find_file(name);\n    if (idx == -1) { printf(\"[Error] File '%s' not found.\\n\", name); return; }\n\n    if (inodes[idx].start_block >= 0) free_chain(inodes[idx].start_block);\n\n    int len = (int)strlen(data);\n    int blocks_needed = (len + BLOCK_SIZE - 1) / BLOCK_SIZE;\n    if (blocks_needed == 0) blocks_needed = 1;\n\n    int prev = -1, first = -1, offset = 0;\n    for (int b = 0; b < blocks_needed; b++) {\n        int blk = alloc_free_block();\n        if (blk == -1) {\n            printf(\"[Error] Out of virtual disk space!\\n\");\n            if (first >= 0) free_chain(first);\n            inodes[idx].start_block = FAT_EOF;\n            inodes[idx].size = 0;\n            return;\n        }\n        fat[blk] = FAT_EOF;\n        if (prev != -1) fat[prev] = blk;\n        else first = blk;\n\n        int copy_len = (len - offset > BLOCK_SIZE) ? BLOCK_SIZE : (len - offset);\n        memcpy(disk_blocks[blk], data + offset, copy_len);\n        offset += copy_len;\n        prev = blk;\n    }\n    inodes[idx].start_block = first;\n    inodes[idx].size = len;\n    printf(\"[Written] %d bytes written to '%s' (%d block(s)).\\n\", len, name, blocks_needed);\n}\n\nvoid read_file(const char *name) {\n    int idx = find_file(name);\n    if (idx == -1) { printf(\"[Error] File '%s' not found.\\n\", name); return; }\n    printf(\"--- Content of '%s' (Size: %d bytes) ---\\n\", name, inodes[idx].size);\n    int curr = inodes[idx].start_block, remaining = inodes[idx].size;\n    while (curr >= 0 && remaining > 0) {\n        int chunk = (remaining > BLOCK_SIZE) ? BLOCK_SIZE : remaining;\n        printf(\"%.*s\", chunk, disk_blocks[curr]);\n        remaining -= chunk;\n        curr = fat[curr];\n    }\n    printf(\"\\n-------------------------------------------\\n\");\n}\n\nvoid delete_file(const char *name) {\n    int idx = find_file(name);\n    if (idx == -1) { printf(\"[Error] File '%s' not found.\\n\", name); return; }\n    if (inodes[idx].start_block >= 0) free_chain(inodes[idx].start_block);\n    inodes[idx].used = 0;\n    printf(\"[Deleted] File '%s' (Inode #%d) removed.\\n\", name, inodes[idx].inode_id);\n}\n\nvoid list_and_usage() {\n    printf(\"\\n=== INODE DIRECTORY TABLE ===\\n\");\n    printf(\"Inode\\tName\\t\\tSize(B)\\tFAT Block Chain\\n\");\n    for (int i = 0; i < MAX_FILES; i++) {\n        if (inodes[i].used) {\n            printf(\"#%d\\t%-12s\\t%d\\t\", inodes[i].inode_id, inodes[i].name, inodes[i].size);\n            int curr = inodes[i].start_block;\n            if (curr < 0) printf(\"(empty)\");\n            while (curr >= 0) {\n                printf(\"%d\", curr);\n                curr = fat[curr];\n                if (curr >= 0) printf(\" -> \");\n            }\n            printf(\"\\n\");\n        }\n    }\n    int used_blks = 0;\n    for (int i = 0; i < TOTAL_BLOCKS; i++) if (fat[i] != FAT_FREE) used_blks++;\n    printf(\"Storage Usage: %d/%d blocks used (%d/%d bytes)\\n\",\n           used_blks, TOTAL_BLOCKS, used_blks * BLOCK_SIZE, TOTAL_BLOCKS * BLOCK_SIZE);\n}\n\nint main() {\n    init_fs();\n    int ch;\n    char name[32], data[256];\n    do {\n        printf(\"\\n=== SIMULATED FS MENU (Inode + FAT) ===\\n\");\n        printf(\"1. Create File\\n2. Write File\\n3. Read File\\n4. Delete File\\n5. List & Storage Map\\n6. Exit\\nChoice: \");\n        if (scanf(\"%d\", &ch) != 1) break;\n        getchar();\n        if (ch == 1) {\n            printf(\"Enter filename: \"); scanf(\"%31s\", name); create_file(name);\n        } else if (ch == 2) {\n            printf(\"Enter filename: \"); scanf(\"%31s\", name); getchar();\n            printf(\"Enter text content: \"); fgets(data, sizeof(data), stdin);\n            data[strcspn(data, \"\\n\")] = '\\0';\n            write_file(name, data);\n        } else if (ch == 3) {\n            printf(\"Enter filename: \"); scanf(\"%31s\", name); read_file(name);\n        } else if (ch == 4) {\n            printf(\"Enter filename: \"); scanf(\"%31s\", name); delete_file(name);\n        } else if (ch == 5) {\n            list_and_usage();\n        }\n    } while (ch != 6);\n    return 0;\n}\n",
        "compileCmd": "gcc -Wall filesystem_sim.c -o filesystem_sim",
        "runCmd": "./filesystem_sim",
        "sampleInputs": [
          {
            "desc": "Scenario 1: Create notes.txt, write 37 chars, list Inode/FAT, read, exit",
            "input": "1\nnotes.txt\n2\nnotes.txt\nOperating Systems Inode and FAT Demo!\n5\n3\nnotes.txt\n6"
          },
          {
            "desc": "Scenario 2: Create two files, delete first, verify freed blocks",
            "input": "1\na.txt\n2\na.txt\nHello Block Chain\n1\nb.txt\n2\nb.txt\nSecond File\n4\na.txt\n5\n6"
          }
        ],
        "sampleOutputs": [
          {
            "desc": "Expected Output (Scenario 1)",
            "output": "[Created] File 'notes.txt' assigned Inode #100.\n[Written] 37 bytes written to 'notes.txt' (3 block(s)).\n\n=== INODE DIRECTORY TABLE ===\nInode\tName\t\tSize(B)\tFAT Block Chain\n#100\tnotes.txt   \t37\t0 -> 1 -> 2\nStorage Usage: 3/32 blocks used (48/512 bytes)\n--- Content of 'notes.txt' (Size: 37 bytes) ---\nOperating Systems Inode and FAT Demo!\n-------------------------------------------"
          },
          {
            "desc": "Expected Output (Scenario 2)",
            "output": "[Created] File 'a.txt' assigned Inode #100.\n[Written] 17 bytes written to 'a.txt' (2 block(s)).\n[Created] File 'b.txt' assigned Inode #101.\n[Written] 11 bytes written to 'b.txt' (1 block(s)).\n[Deleted] File 'a.txt' (Inode #100) removed.\n\n=== INODE DIRECTORY TABLE ===\nInode\tName\t\tSize(B)\tFAT Block Chain\n#101\tb.txt       \t11\t2\nStorage Usage: 1/32 blocks used (16/512 bytes)"
          }
        ]
      },
      "cpp": {
        "filename": "filesystem_sim.cpp",
        "langLabel": "C++17 (OOP Inode + FAT Sim)",
        "source": "/*\n * Practical 08: Educational In-Memory File System Simulator in C++17\n * Simulates Inode metadata and FAT block chains safely in RAM.\n * Compile: g++ -std=c++17 -Wall filesystem_sim.cpp -o fs_sim_cpp\n * Run:     ./fs_sim_cpp\n */\n#include <iostream>\n#include <vector>\n#include <unordered_map>\n#include <string>\n\nstruct Inode {\n    int inodeId;\n    std::string name;\n    int size = 0;\n    int startBlock = -2; // -2 = EOF\n};\n\nclass VirtualFileSystem {\nprivate:\n    static constexpr int TOTAL_BLOCKS = 32;\n    static constexpr int BLOCK_SIZE = 16;\n    static constexpr int FAT_FREE = -1;\n    static constexpr int FAT_EOF = -2;\n\n    std::vector<std::string> blocks;\n    std::vector<int> fat;\n    std::unordered_map<std::string, Inode> inodes;\n    int nextInode = 100;\n\n    int allocBlock() {\n        for (int i = 0; i < TOTAL_BLOCKS; ++i) {\n            if (fat[i] == FAT_FREE) return i;\n        }\n        return -1;\n    }\n\n    void freeChain(int start) {\n        int curr = start;\n        while (curr >= 0 && curr < TOTAL_BLOCKS) {\n            int nxt = fat[curr];\n            fat[curr] = FAT_FREE;\n            blocks[curr].clear();\n            curr = nxt;\n        }\n    }\n\npublic:\n    VirtualFileSystem() : blocks(TOTAL_BLOCKS), fat(TOTAL_BLOCKS, FAT_FREE) {}\n\n    void createFile(const std::string& name) {\n        if (inodes.count(name)) {\n            std::cout << \"[Error] File '\" << name << \"' already exists.\\n\";\n            return;\n        }\n        inodes[name] = Inode{nextInode++, name, 0, FAT_EOF};\n        std::cout << \"[Created] '\" << name << \"' -> Inode #\" << inodes[name].inodeId << \"\\n\";\n    }\n\n    void writeFile(const std::string& name, const std::string& content) {\n        auto it = inodes.find(name);\n        if (it == inodes.end()) { std::cout << \"[Error] File not found.\\n\"; return; }\n\n        if (it->second.startBlock >= 0) freeChain(it->second.startBlock);\n\n        int len = static_cast<int>(content.size());\n        int needed = std::max(1, (len + BLOCK_SIZE - 1) / BLOCK_SIZE);\n        int first = -2, prev = -1;\n\n        for (int b = 0; b < needed; ++b) {\n            int blk = allocBlock();\n            if (blk == -1) {\n                std::cout << \"[Error] Out of disk space!\\n\";\n                if (first >= 0) freeChain(first);\n                it->second.startBlock = FAT_EOF;\n                it->second.size = 0;\n                return;\n            }\n            fat[blk] = FAT_EOF;\n            if (prev != -1) fat[prev] = blk; else first = blk;\n            blocks[blk] = content.substr(b * BLOCK_SIZE, BLOCK_SIZE);\n            prev = blk;\n        }\n        it->second.startBlock = first;\n        it->second.size = len;\n        std::cout << \"[Written] \" << len << \" bytes into \" << needed << \" block(s).\\n\";\n    }\n\n    void readFile(const std::string& name) const {\n        auto it = inodes.find(name);\n        if (it == inodes.end()) { std::cout << \"[Error] File not found.\\n\"; return; }\n        std::cout << \"--- Content of '\" << name << \"' (\" << it->second.size << \"B) ---\\n\";\n        int curr = it->second.startBlock;\n        while (curr >= 0) {\n            std::cout << blocks[curr];\n            curr = fat[curr];\n        }\n        std::cout << \"\\n----------------------------------------\\n\";\n    }\n\n    void deleteFile(const std::string& name) {\n        auto it = inodes.find(name);\n        if (it == inodes.end()) { std::cout << \"[Error] File not found.\\n\"; return; }\n        if (it->second.startBlock >= 0) freeChain(it->second.startBlock);\n        std::cout << \"[Deleted] '\" << name << \"' (Inode #\" << it->second.inodeId << \")\\n\";\n        inodes.erase(it);\n    }\n\n    void listFiles() const {\n        std::cout << \"\\n=== INODE & FAT TABLE ===\\nInode\\tName\\t\\tSize\\tFAT Chain\\n\";\n        for (const auto& [name, node] : inodes) {\n            std::cout << \"#\" << node.inodeId << \"\\t\" << name << \"\\t\\t\" << node.size << \"B\\t\";\n            int curr = node.startBlock;\n            if (curr < 0) std::cout << \"(empty)\";\n            while (curr >= 0) {\n                std::cout << curr;\n                curr = fat[curr];\n                if (curr >= 0) std::cout << \" -> \";\n            }\n            std::cout << \"\\n\";\n        }\n        int used = 0;\n        for (int f : fat) if (f != FAT_FREE) ++used;\n        std::cout << \"Storage: \" << used << \"/\" << TOTAL_BLOCKS << \" blocks used.\\n\";\n    }\n};\n\nint main() {\n    VirtualFileSystem vfs;\n    int ch;\n    std::string name, data;\n    do {\n        std::cout << \"\\n=== C++ VIRTUAL FS MENU ===\\n1. Create\\n2. Write\\n3. Read\\n4. Delete\\n5. List\\n6. Exit\\nChoice: \";\n        if (!(std::cin >> ch)) break;\n        std::cin.ignore();\n        if (ch == 1) { std::cout << \"Filename: \"; std::getline(std::cin, name); vfs.createFile(name); }\n        else if (ch == 2) {\n            std::cout << \"Filename: \"; std::getline(std::cin, name);\n            std::cout << \"Content: \"; std::getline(std::cin, data);\n            vfs.writeFile(name, data);\n        }\n        else if (ch == 3) { std::cout << \"Filename: \"; std::getline(std::cin, name); vfs.readFile(name); }\n        else if (ch == 4) { std::cout << \"Filename: \"; std::getline(std::cin, name); vfs.deleteFile(name); }\n        else if (ch == 5) vfs.listFiles();\n    } while (ch != 6);\n    return 0;\n}\n",
        "compileCmd": "g++ -std=c++17 -Wall filesystem_sim.cpp -o fs_sim_cpp",
        "runCmd": "./fs_sim_cpp",
        "sampleInputs": [
          {
            "desc": "Scenario 1: Create, Write, List, Read",
            "input": "1\nnotes.txt\n2\nnotes.txt\nOperating Systems Inode and FAT Demo!\n5\n3\nnotes.txt\n6"
          },
          {
            "desc": "Scenario 2: Create 2 files, Delete 1, List",
            "input": "1\na.txt\n2\na.txt\nHello Block Chain\n1\nb.txt\n2\nb.txt\nSecond File\n4\na.txt\n5\n6"
          }
        ],
        "sampleOutputs": [
          {
            "desc": "Expected Output (Scenario 1)",
            "output": "[Created] 'notes.txt' -> Inode #100\n[Written] 37 bytes into 3 block(s).\n\n=== INODE & FAT TABLE ===\nInode\tName\t\tSize\tFAT Chain\n#100\tnotes.txt\t\t37B\t0 -> 1 -> 2\nStorage: 3/32 blocks used."
          },
          {
            "desc": "Expected Output (Scenario 2)",
            "output": "[Deleted] 'a.txt' (Inode #100)\n\n=== INODE & FAT TABLE ===\nInode\tName\t\tSize\tFAT Chain\n#101\tb.txt\t\t11B\t2\nStorage: 1/32 blocks used."
          }
        ]
      },
      "python": {
        "filename": "filesystem_sim.py",
        "langLabel": "Python 3 (Inode + FAT Sim)",
        "source": "#!/usr/bin/env python3\n\"\"\"\nPractical 08: Educational In-Memory File System Simulator in Python\nSimulates Inodes + FAT block chains safely in memory.\nRun: python3 filesystem_sim.py\n\"\"\"\n\nTOTAL_BLOCKS = 32\nBLOCK_SIZE = 16\nFAT_FREE = -1\nFAT_EOF = -2\n\nclass VirtualFS:\n    def __init__(self):\n        self.blocks = [\"\"] * TOTAL_BLOCKS\n        self.fat = [FAT_FREE] * TOTAL_BLOCKS\n        self.inodes = {}\n        self.next_inode = 100\n\n    def _alloc_block(self):\n        for i, status in enumerate(self.fat):\n            if status == FAT_FREE:\n                return i\n        return -1\n\n    def _free_chain(self, start):\n        curr = start\n        while curr >= 0:\n            nxt = self.fat[curr]\n            self.fat[curr] = FAT_FREE\n            self.blocks[curr] = \"\"\n            curr = nxt\n\n    def create(self, name):\n        if name in self.inodes:\n            print(f\"[Error] '{name}' already exists.\")\n            return\n        self.inodes[name] = {\"inode\": self.next_inode, \"size\": 0, \"start\": FAT_EOF}\n        print(f\"[Created] '{name}' -> Inode #{self.next_inode}\")\n        self.next_inode += 1\n\n    def write(self, name, data):\n        if name not in self.inodes:\n            print(f\"[Error] '{name}' not found.\")\n            return\n        if self.inodes[name][\"start\"] >= 0:\n            self._free_chain(self.inodes[name][\"start\"])\n\n        chunks = [data[i:i+BLOCK_SIZE] for i in range(0, len(data), BLOCK_SIZE)] or [\"\"]\n        first, prev = FAT_EOF, -1\n        for chunk in chunks:\n            blk = self._alloc_block()\n            if blk == -1:\n                print(\"[Error] Disk full!\")\n                if first >= 0: self._free_chain(first)\n                self.inodes[name][\"start\"] = FAT_EOF\n                self.inodes[name][\"size\"] = 0\n                return\n            self.fat[blk] = FAT_EOF\n            if prev != -1:\n                self.fat[prev] = blk\n            else:\n                first = blk\n            self.blocks[blk] = chunk\n            prev = blk\n\n        self.inodes[name][\"start\"] = first\n        self.inodes[name][\"size\"] = len(data)\n        print(f\"[Written] {len(data)} bytes into {len(chunks)} block(s).\")\n\n    def read(self, name):\n        if name not in self.inodes:\n            print(f\"[Error] '{name}' not found.\")\n            return\n        curr = self.inodes[name][\"start\"]\n        out = []\n        while curr >= 0:\n            out.append(self.blocks[curr])\n            curr = self.fat[curr]\n        print(f\"--- Content of '{name}' ({self.inodes[name]['size']}B) ---\")\n        print(\"\".join(out))\n        print(\"-\" * 40)\n\n    def delete(self, name):\n        if name not in self.inodes:\n            print(f\"[Error] '{name}' not found.\")\n            return\n        if self.inodes[name][\"start\"] >= 0:\n            self._free_chain(self.inodes[name][\"start\"])\n        iid = self.inodes[name][\"inode\"]\n        del self.inodes[name]\n        print(f\"[Deleted] '{name}' (Inode #{iid})\")\n\n    def list_all(self):\n        print(\"\\n=== INODE & FAT TABLE ===\")\n        print(\"Inode\\tName\\t\\tSize\\tFAT Chain\")\n        for name, meta in self.inodes.items():\n            chain = []\n            curr = meta[\"start\"]\n            while curr >= 0:\n                chain.append(str(curr))\n                curr = self.fat[curr]\n            cstr = \" -> \".join(chain) if chain else \"(empty)\"\n            print(f\"#{meta['inode']}\\t{name:<12}\\t{meta['size']}B\\t{cstr}\")\n        used = sum(1 for x in self.fat if x != FAT_FREE)\n        print(f\"Storage: {used}/{TOTAL_BLOCKS} blocks used ({used*BLOCK_SIZE}/{TOTAL_BLOCKS*BLOCK_SIZE} bytes)\")\n\ndef main():\n    vfs = VirtualFS()\n    while True:\n        print(\"\\n=== PYTHON VIRTUAL FS MENU ===\")\n        print(\"1. Create\\n2. Write\\n3. Read\\n4. Delete\\n5. List\\n6. Exit\")\n        ch = input(\"Choice: \").strip()\n        if ch == \"1\": vfs.create(input(\"Filename: \").strip())\n        elif ch == \"2\": vfs.write(input(\"Filename: \").strip(), input(\"Content: \"))\n        elif ch == \"3\": vfs.read(input(\"Filename: \").strip())\n        elif ch == \"4\": vfs.delete(input(\"Filename: \").strip())\n        elif ch == \"5\": vfs.list_all()\n        elif ch == \"6\": break\n\nif __name__ == \"__main__\":\n    main()\n",
        "compileCmd": "python3 -m py_compile filesystem_sim.py",
        "runCmd": "python3 filesystem_sim.py",
        "sampleInputs": [
          {
            "desc": "Scenario 1: Create, Write, List, Read",
            "input": "1\nnotes.txt\n2\nnotes.txt\nOperating Systems Inode and FAT Demo!\n5\n3\nnotes.txt\n6"
          },
          {
            "desc": "Scenario 2: Create 2 files, Delete 1, List",
            "input": "1\na.txt\n2\na.txt\nHello Block Chain\n1\nb.txt\n2\nb.txt\nSecond File\n4\na.txt\n5\n6"
          }
        ],
        "sampleOutputs": [
          {
            "desc": "Expected Output (Scenario 1)",
            "output": "[Created] 'notes.txt' -> Inode #100\n[Written] 37 bytes into 3 block(s).\n\n=== INODE & FAT TABLE ===\nInode\tName\t\tSize\tFAT Chain\n#100\tnotes.txt   \t37B\t0 -> 1 -> 2\nStorage: 3/32 blocks used (48/512 bytes)"
          },
          {
            "desc": "Expected Output (Scenario 2)",
            "output": "[Deleted] 'a.txt' (Inode #100)\n\n=== INODE & FAT TABLE ===\nInode\tName\t\tSize\tFAT Chain\n#101\tb.txt       \t11B\t2\nStorage: 1/32 blocks used (16/512 bytes)"
          }
        ]
      }
    }
  }
];

// ============================================================================
// OS PRACTICAL HUB — CLIENT-SIDE APPLICATION LOGIC
// ============================================================================

let currentPracticalId = null;
let currentLang = 'c';
let currentAlgo = 'fcfs';
let currentCmdCatIdx = 0;
let activeCategoryFilter = 'all';
let currentSearchTerm = '';
let currentCodeRaw = '';
let currentFilename = 'program.c';

const practicalAssetFiles = {
  1: { path: 'assets/Linux Commands Charts (1).doc', name: 'Linux Commands Charts (1).doc', label: 'Download Reference (.doc)' },
  2: { path: 'assets/Assignment_02.pdf', name: 'Assignment_02.pdf', label: 'Download Assignment PDF' },
  3: { path: 'assets/Assignment3 (2).pdf', name: 'Assignment3 (2).pdf', label: 'Download Assignment PDF' },
  4: { path: 'assets/Assignment_04 (2).pdf', name: 'Assignment_04 (2).pdf', label: 'Download Assignment PDF' },
  5: { path: 'assets/Assignment_05.pdf', name: 'Assignment_05.pdf', label: 'Download Assignment PDF' },
  6: { path: 'assets/Assignment_06 (2).pdf', name: 'Assignment_06 (2).pdf', label: 'Download Assignment PDF' },
  7: { path: 'assets/Assignment_07.pdf', name: 'Assignment_07.pdf', label: 'Download Assignment PDF' },
  8: { path: 'assets/Assignment_08.pdf', name: 'Assignment_08.pdf', label: 'Download Assignment PDF' }
};

function renderAssetDownloadBtn(id) {
  const asset = practicalAssetFiles[id];
  if (!asset) return '';
  return `<a href="${encodeURI(asset.path)}" download="${escapeHtml(asset.name)}" class="btn-download-asset" title="Download ${escapeHtml(asset.name)}">⬇ ${escapeHtml(asset.label)}</a>`;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Syntax Highlighter for C, C++, Python, Bash
function highlightCode(code, lang) {
  if (!code) return '';
  const lines = code.split('\n');

  const cKeywords = /\b(auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|restrict|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|class|namespace|public|private|protected|template|typename|using|virtual|override|explicit|constexpr|nullptr|true|false|bool|new|delete|try|catch|throw)\b/g;
  const cTypes = /\b(size_t|ssize_t|pid_t|uint64_t|pthread_t|pthread_mutex_t|pthread_cond_t|sem_t|FILE|Process|Inode|BoundedBuffer|VirtualFileSystem|DiskMonitor|std|vector|string|queue|unordered_map|array|unique_lock|mutex|condition_variable|thread)\b/g;
  const pyKeywords = /\b(and|as|assert|async|await|break|class|continue|def|del|elif|else|except|False|finally|for|from|global|if|import|in|is|lambda|None|nonlocal|not|or|pass|raise|return|True|try|while|with|yield)\b/g;
  const bashKeywords = /\b(if|then|else|elif|fi|for|while|do|done|case|esac|in|function|return|local|export|echo|printf|read|exit|sudo|apt|df|chmod|awk|tail)\b/g;

  return lines.map(line => {
    let escaped = escapeHtml(line);

    // Handle full-line or trailing comments safely via placeholders
    const tokens = [];
    const saveToken = (html) => {
      const idx = tokens.length;
      tokens.push(html);
      return `\x00TOK${idx}\x00`;
    };

    if (lang === 'python' || lang === 'bash') {
      escaped = escaped.replace(/(#.*)$/, (m) => saveToken(`<span class="tok-com">${m}</span>`));
    } else {
      escaped = escaped.replace(/(\/\/.*)$/, (m) => saveToken(`<span class="tok-com">${m}</span>`));
      escaped = escaped.replace(/(&quot;.*?&quot;|&#39;.*?&#39;)/g, (m) => saveToken(`<span class="tok-str">${m}</span>`));
      escaped = escaped.replace(/^(\s*#\s*(?:include|define|ifdef|ifndef|endif|pragma).*)$/, (m) => saveToken(`<span class="tok-prep">${m}</span>`));
    }

    if (lang === 'python' || lang === 'bash') {
      escaped = escaped.replace(/(&quot;.*?&quot;|&#39;.*?&#39;)/g, (m) => saveToken(`<span class="tok-str">${m}</span>`));
    }

    if (lang === 'python') {
      escaped = escaped.replace(pyKeywords, '<span class="tok-kw">$1</span>');
    } else if (lang === 'bash') {
      escaped = escaped.replace(bashKeywords, '<span class="tok-kw">$1</span>');
    } else {
      escaped = escaped.replace(cKeywords, '<span class="tok-kw">$1</span>');
      escaped = escaped.replace(cTypes, '<span class="tok-type">$1</span>');
    }

    escaped = escaped.replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="tok-num">$1</span>');

    return escaped.replace(/\x00TOK(\d+)\x00/g, (_, idx) => tokens[Number(idx)]);
  }).join('\n');
}

// ============================================================================
// HOME GRID RENDERING & SEARCH / FILTERING
// ============================================================================

function renderPracticalsGrid() {
  const grid = document.getElementById('practicalsGrid');
  const emptyState = document.getElementById('emptySearchState');
  const counter = document.getElementById('resultsCounter');
  if (!grid) return;

  const q = currentSearchTerm.trim().toLowerCase();
  const filtered = practicalsData.filter(p => {
    const matchesCat = activeCategoryFilter === 'all' || p.category === activeCategoryFilter;
    if (!matchesCat) return false;
    if (!q) return true;

    const inTitle = p.title.toLowerCase().includes(q);
    const inNum = p.number.toLowerCase().includes(q);
    const inCat = p.categoryLabel.toLowerCase().includes(q);
    const inTopics = (p.topics || []).some(t => t.toLowerCase().includes(q));
    const inDesc = (p.shortDesc || '').toLowerCase().includes(q);
    const inCmds = p.type === 'commands' && (p.categories || []).some(c =>
      c.name.toLowerCase().includes(q) || c.commands.some(cmd => cmd.name.toLowerCase().includes(q))
    );
    return inTitle || inNum || inCat || inTopics || inDesc || inCmds;
  });

  if (counter) {
    counter.textContent = filtered.length === practicalsData.length
      ? `Showing all ${practicalsData.length} practicals`
      : `Showing ${filtered.length} of ${practicalsData.length} practicals`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  grid.innerHTML = filtered.map(p => {
    return `
      <article class="practical-card" onclick="openPractical(${p.id})">
        <div class="card-left">
          <div class="card-title-wrap">
            <h3 class="card-title">${escapeHtml(p.title)}</h3>
          </div>
        </div>
        <div class="card-right">
          <button class="btn-open-practical" onclick="event.stopPropagation(); openPractical(${p.id})">
            Open Practical
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </article>
    `;
  }).join('');
}

// ============================================================================
// DETAIL VIEW RENDERING
// ============================================================================

function openPractical(id) {
  const p = practicalsData.find(item => item.id === Number(id));
  if (!p) return;

  currentPracticalId = p.id;
  currentLang = p.defaultLang || 'c';
  currentAlgo = p.defaultAlgo || 'fcfs';
  currentCmdCatIdx = 0;

  const homeView = document.getElementById('homeView');
  const detailView = document.getElementById('detailView');
  const crumb = document.getElementById('detailBreadcrumb');
  const navHomeBtn = document.getElementById('navHomeBtn');
  const navAllBtn = document.getElementById('navAllBtn');
  const jumpSelect = document.getElementById('quickJumpSelect');

  if (homeView) homeView.style.display = 'none';
  if (detailView) detailView.style.display = 'block';
  if (crumb) crumb.textContent = `${p.number}: ${p.title}`;
  if (navHomeBtn) navHomeBtn.classList.remove('active');
  if (navAllBtn) navAllBtn.classList.add('active');
  if (jumpSelect) jumpSelect.value = String(p.id);

  if (p.type === 'commands') {
    renderPractical01(p);
  } else {
    renderCodingPractical(p);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderPractical01(p) {
  const container = document.getElementById('practicalDetailContent');
  if (!container) return;

  const cats = p.categories || [];
  const activeCat = cats[currentCmdCatIdx] || cats[0];

  const catButtons = cats.map((cat, idx) => `
    <button class="cmd-cat-btn ${idx === currentCmdCatIdx ? 'active' : ''}" onclick="switchCommandCategory(${idx})">
      ${escapeHtml(cat.name)} (${cat.commands.length})
    </button>
  `).join('');

  const cmdCards = (activeCat.commands || []).map((cmd, idx) => {
    const dangerClass = cmd.danger && cmd.danger.toLowerCase().includes('sudo') ? 'sudo' : 'danger';
    const dangerPill = cmd.danger
      ? `<span class="cmd-warning-pill ${dangerClass}">${escapeHtml(cmd.danger)}</span>`
      : '';

    const examplesHtml = (cmd.examples || []).map((ex, eIdx) => `
      <div class="cmd-ex-item">
        <div class="cmd-ex-header">
          <span class="cmd-ex-label">Example ${eIdx + 1}</span>
          <button class="btn-copy-sm" onclick="copyTextToClipboard(${JSON.stringify(ex.cmd)}, 'Copied command: ${escapeHtml(ex.cmd)}')">Copy</button>
        </div>
        <pre class="cmd-ex-cmd">$ ${escapeHtml(ex.cmd)}</pre>
        <pre class="cmd-ex-out">${escapeHtml(ex.out)}</pre>
      </div>
    `).join('');

    return `
      <div class="cmd-card">
        <div class="cmd-header">
          <div class="cmd-title-group">
            <code class="cmd-name">${escapeHtml(cmd.name)}</code>
            ${dangerPill}
          </div>
          <button class="btn-copy-sm" onclick="copyTextToClipboard(${JSON.stringify(cmd.examples[0].cmd)}, 'Copied ${escapeHtml(cmd.name)} example!')">Copy Command</button>
        </div>
        <p class="cmd-purpose">${escapeHtml(cmd.purpose)}</p>
        <div class="cmd-syntax-box">
          <span class="syntax-label">Syntax:</span>
          <code>${escapeHtml(cmd.syntax)}</code>
        </div>
        <div class="cmd-examples-section">
          ${examplesHtml}
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="practical-header-block">
      <div class="practical-header-top">
        <span class="practical-id-badge">${escapeHtml(p.number)}</span>
        <span class="practical-category-pill">${escapeHtml(p.categoryLabel)}</span>
        ${renderAssetDownloadBtn(p.id)}
      </div>
      <h1 class="practical-full-title">${escapeHtml(p.title)}</h1>
      <div class="aim-box">
        <div class="aim-label">Aim</div>
        <p>${escapeHtml(p.aim)}</p>
      </div>
    </div>

    <div class="callout-box">
      <div class="callout-title">Safety Notice</div>
      <ul class="callout-list">
        <li>Commands marked with <strong>Delete / Overwrite</strong> or <strong>Modify Permissions</strong> can alter files on disk. Always verify paths before running.</li>
        <li>This portal never executes shell commands directly; copy and run them in your Linux/Ubuntu or WSL terminal.</li>
      </ul>
    </div>

    <div class="cmd-categories-wrap">
      ${catButtons}
    </div>

    <div class="cmd-category-header">
      <div>
        <h2 class="card-section-title">${escapeHtml(activeCat.name)}</h2>
        <p class="section-subtitle">${activeCat.commands.length} essential commands with syntax and expected terminal outputs.</p>
      </div>
      <button class="btn btn-primary" onclick="copyCategoryCommands(${currentCmdCatIdx})">
        Copy All Commands in Category
      </button>
    </div>

    <div class="cmd-cards-grid">
      ${cmdCards}
    </div>
  `;
}

function switchCommandCategory(idx) {
  const p = practicalsData.find(item => item.id === currentPracticalId);
  if (!p) return;
  currentCmdCatIdx = idx;
  renderPractical01(p);
}

function copyCategoryCommands(catIdx) {
  const p = practicalsData.find(item => item.id === currentPracticalId);
  if (!p || !p.categories || !p.categories[catIdx]) return;
  const cat = p.categories[catIdx];
  const allCmds = cat.commands.map(c => `# ${c.name}: ${c.purpose}\n${c.examples[0].cmd}`).join('\n\n');
  copyTextToClipboard(allCmds, `Copied all ${cat.commands.length} commands from ${cat.name}!`);
}

function renderCodingPractical(p) {
  const container = document.getElementById('practicalDetailContent');
  if (!container) return;

  const isMulti = p.type === 'coding_multi';
  const langMap = { bash: 'Bash', c: 'C', cpp: 'C++', python: 'Python' };

  const langButtons = (p.languages || []).map(l => `
    <button class="lang-btn ${l === currentLang ? 'active' : ''}" onclick="setLanguage('${l}')">
      ${langMap[l] || l.toUpperCase()}
    </button>
  `).join('');

  let algoHtml = '';
  let impl = null;

  if (isMulti) {
    const algoButtons = (p.algorithms || []).map(a => `
      <button class="algo-btn ${a.key === currentAlgo ? 'active' : ''}" onclick="setAlgorithm('${a.key}')">
        ${escapeHtml(a.label)}
      </button>
    `).join('');
    algoHtml = `
      <div class="switcher-group">
        <span class="switcher-label">Algorithm / Mode:</span>
        <div class="pill-button-group">${algoButtons}</div>
      </div>
    `;
    impl = p.code[currentLang][currentAlgo];
  } else {
    impl = p.code[currentLang];
  }

  currentCodeRaw = impl.source || '';
  currentFilename = impl.filename || 'program.txt';

  const linesCount = currentCodeRaw.split('\n').length;
  const lineNumsHtml = Array.from({ length: linesCount }, (_, i) => `<span>${i + 1}</span>`).join('');
  const highlightedHtml = highlightCode(currentCodeRaw, currentLang);

  const linuxNoteHtml = p.linuxOnlyNote ? `
    <div class="callout-box">
      <div class="callout-title">Environment Requirement (Linux / Ubuntu / WSL)</div>
      <ul class="callout-list">
        <li>${escapeHtml(p.linuxOnlyNote)}</li>
      </ul>
    </div>
  ` : '';

  const topicBadges = (p.topics || []).map(t =>
    `<span class="practical-category-pill">${escapeHtml(t)}</span>`
  ).join('');

  // Sample Inputs & Outputs Accordion
  const inputs = impl.sampleInputs || [];
  const outputs = impl.sampleOutputs || [];
  const pairCount = Math.max(inputs.length, outputs.length);

  let samplesHtml = '';
  for (let i = 0; i < pairCount; i++) {
    const inp = inputs[i];
    const out = outputs[i];
    samplesHtml += `
      <details class="accordion-item" ${i === 0 ? 'open' : ''}>
        <summary class="accordion-header">
          <span>Test Case ${i + 1}: ${escapeHtml((inp && inp.desc) || (out && out.desc) || 'Sample Run')}</span>
          <span class="accordion-chevron">▾</span>
        </summary>
        <div class="samples-grid">
          ${inp ? `
            <div class="sample-box">
              <div class="sample-box-header">
                <span class="sample-badge input-badge">Sample Input ${i + 1}</span>
                <button class="sample-copy-btn" onclick="copyTextToClipboard(${JSON.stringify(inp.input)}, 'Sample Input ${i + 1} copied!')">Copy Input</button>
              </div>
              <pre class="sample-content">${escapeHtml(inp.input)}</pre>
            </div>
          ` : ''}
          ${out ? `
            <div class="sample-box">
              <div class="sample-box-header">
                <span class="sample-badge output-badge">Expected Output ${i + 1}</span>
                <button class="sample-copy-btn" onclick="copyTextToClipboard(${JSON.stringify(out.output)}, 'Expected Output ${i + 1} copied!')">Copy Output</button>
              </div>
              <pre class="sample-content">${escapeHtml(out.output)}</pre>
            </div>
          ` : ''}
        </div>
      </details>
    `;
  }

  const compilerDesc = currentLang === 'c'
    ? 'GCC (GNU C Compiler) on Ubuntu/Linux or WSL'
    : currentLang === 'cpp'
      ? 'G++ (GNU C++17 Compiler) on Ubuntu/Linux or WSL'
      : currentLang === 'python'
        ? 'Python 3 Interpreter (python3)'
        : 'GNU Bash Shell (Ubuntu/Linux or WSL)';

  container.innerHTML = `
    <div class="practical-header-block">
      <div class="practical-header-top">
        <span class="practical-id-badge">${escapeHtml(p.number)}</span>
        <span class="practical-category-pill">${escapeHtml(p.categoryLabel)}</span>
        ${renderAssetDownloadBtn(p.id)}
      </div>
      <h1 class="practical-full-title">${escapeHtml(p.title)}</h1>
      <div class="aim-box">
        <div class="aim-label">Aim</div>
        <p>${escapeHtml(p.aim)}</p>
      </div>
    </div>

    ${linuxNoteHtml}

    <div class="control-switchers-card">
      <div class="switcher-group">
        <span class="switcher-label">Programming Language:</span>
        <div class="pill-button-group">${langButtons}</div>
      </div>
      ${algoHtml}
    </div>

    <div class="code-viewer-card">
      <div class="code-viewer-header">
        <div class="file-info">
          <span class="file-icon">📄</span>
          <span class="file-name">${escapeHtml(impl.filename)}</span>
          <span class="lang-badge">${escapeHtml(impl.langLabel)}</span>
        </div>
        <div class="code-actions-group">
          <button class="btn-code-action" onclick="copyCurrentCode()">
            📋 Copy Code
          </button>
          <button class="btn-code-action" onclick="downloadCurrentCode()">
            ⬇ Download ${escapeHtml(impl.filename)}
          </button>
        </div>
      </div>
      <div class="code-container">
        <div class="line-numbers-col">${lineNumsHtml}</div>
        <pre class="code-body-col"><code>${highlightedHtml}</code></pre>
      </div>
    </div>

    <div class="section-block" style="margin-top: 24px;">
      <h2 class="card-section-title" style="margin-bottom: 12px;">Sample Inputs &amp; Expected Outputs</h2>
      ${samplesHtml}
    </div>

    <details class="how-to-run-card accordion-item" open style="margin-top: 24px;">
      <summary class="accordion-header">
        <span>How to Compile &amp; Run (${escapeHtml(langMap[currentLang] || currentLang)})</span>
        <span class="accordion-chevron">▾</span>
      </summary>
      <div class="run-steps-list" style="padding: 16px;">
        <div class="run-step-item">
          <div class="step-num-badge">1</div>
          <div class="step-content">
            <div class="step-text"><strong>Required Environment:</strong> ${escapeHtml(compilerDesc)}</div>
          </div>
        </div>
        <div class="run-step-item">
          <div class="step-num-badge">2</div>
          <div class="step-content">
            <div class="step-text">Save or download the source code as <code>${escapeHtml(impl.filename)}</code></div>
          </div>
        </div>
        <div class="run-step-item">
          <div class="step-num-badge">3</div>
          <div class="step-content">
            <div class="step-text">${currentLang === 'python' ? 'Verify syntax (optional):' : currentLang === 'bash' ? 'Make script executable:' : 'Compile the program:'}</div>
            <div class="step-code-cmd">
              <code>${escapeHtml(impl.compileCmd)}</code>
              <button class="btn-copy-sm" onclick="copyTextToClipboard(${JSON.stringify(impl.compileCmd)}, 'Command copied!')">Copy</button>
            </div>
          </div>
        </div>
        <div class="run-step-item">
          <div class="step-num-badge">4</div>
          <div class="step-content">
            <div class="step-text">Execute in Linux / WSL terminal:</div>
            <div class="step-code-cmd">
              <code>${escapeHtml(impl.runCmd)}</code>
              <button class="btn-copy-sm" onclick="copyTextToClipboard(${JSON.stringify(impl.runCmd)}, 'Run command copied!')">Copy</button>
            </div>
          </div>
        </div>
      </div>
    </details>
  `;
}

function setLanguage(lang) {
  const p = practicalsData.find(item => item.id === currentPracticalId);
  if (!p) return;
  currentLang = lang;
  renderCodingPractical(p);
}

function setAlgorithm(algoKey) {
  const p = practicalsData.find(item => item.id === currentPracticalId);
  if (!p) return;
  currentAlgo = algoKey;
  renderCodingPractical(p);
}

// ============================================================================
// CLIPBOARD, DOWNLOAD & NAVIGATION HELPERS
// ============================================================================

function copyTextToClipboard(text, successMsg = 'Copied to clipboard!') {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => showToast(successMsg)).catch(() => fallbackCopy(text, successMsg));
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.left = '-9999px';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand('copy');
    showToast(successMsg);
  } catch (e) {
    showToast('Copy failed. Please copy manually.');
  }
  document.body.removeChild(ta);
}

function copyCurrentCode() {
  copyTextToClipboard(currentCodeRaw, `Copied ${currentFilename} source code!`);
}

function downloadCurrentCode() {
  const blob = new Blob([currentCodeRaw], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = currentFilename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(`Downloaded ${currentFilename}`);
}

let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('copyToast');
  const msgEl = document.getElementById('toastMessage');
  if (!toast || !msgEl) return;
  msgEl.textContent = msg;
  toast.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function navigateToHome() {
  currentPracticalId = null;
  const homeView = document.getElementById('homeView');
  const detailView = document.getElementById('detailView');
  const navHomeBtn = document.getElementById('navHomeBtn');
  const navAllBtn = document.getElementById('navAllBtn');
  const jumpSelect = document.getElementById('quickJumpSelect');

  if (detailView) detailView.style.display = 'none';
  if (homeView) homeView.style.display = 'block';
  if (navHomeBtn) navHomeBtn.classList.add('active');
  if (navAllBtn) navAllBtn.classList.remove('active');
  if (jumpSelect) jumpSelect.value = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToPracticals() {
  navigateToHome();
  setTimeout(() => {
    const sec = document.getElementById('practicalsSection');
    if (sec) sec.scrollIntoView({ behavior: 'smooth' });
  }, 60);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleSearch(val) {
  currentSearchTerm = val;
  const quickInput = document.getElementById('quickSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  if (quickInput && quickInput.value !== val) quickInput.value = val;
  if (clearBtn) clearBtn.style.display = val.trim() ? 'block' : 'none';
  renderPracticalsGrid();
}

function handleQuickSearch(val) {
  navigateToHome();
  const mainInput = document.getElementById('mainSearchInput');
  if (mainInput) mainInput.value = val;
  handleSearch(val);
}

function clearSearch() {
  currentSearchTerm = '';
  const mainInput = document.getElementById('mainSearchInput');
  const quickInput = document.getElementById('quickSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  if (mainInput) mainInput.value = '';
  if (quickInput) quickInput.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  renderPracticalsGrid();
}

function setCategoryFilter(cat, btnEl) {
  activeCategoryFilter = cat;
  document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  renderPracticalsGrid();
}

function handleQuickJump(val) {
  if (!val) return;
  openPractical(Number(val));
}

document.addEventListener('DOMContentLoaded', () => {
  renderPracticalsGrid();

  const scrollBtn = document.getElementById('scrollToTopBtn');
  window.addEventListener('scroll', () => {
    if (!scrollBtn) return;
    if (window.scrollY > 300) scrollBtn.classList.add('visible');
    else scrollBtn.classList.remove('visible');
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      navigateToHome();
      const searchInput = document.getElementById('mainSearchInput');
      if (searchInput) searchInput.focus();
    } else if (e.key === 'Escape' && currentPracticalId !== null) {
      navigateToHome();
    }
  });
});
