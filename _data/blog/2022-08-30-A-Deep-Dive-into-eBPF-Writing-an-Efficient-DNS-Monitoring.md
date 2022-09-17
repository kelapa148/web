---
template: BlogPost
path: /blog/A-Deep-Dive-into-eBPF-Writing-an-Efficient-DNS-Monitoring
date: 2022-08-30T07:08:53.137Z
title: A Deep Dive into eBPF<code>:</code> Writing an Efficient DNS Monitoring
thumbnail: "/assets/blogs/ebpf_nurkholish_halim.png"
author: Nurkholish Halim
metaDescription: A Deep Dive into eBPF<code>:</code> Writing an Efficient DNS Monitoring
---

eBPF is an in-kernel virtual machine, provides a high-level library, instruction set and an execution environment inside the Linux kernel. It’s used in many Linux kernel subsystems, most prominently networking, tracing, debugging and security. Including to modify the processing of packets in the kernel and also allows the programming of network devices such as SmartNICs.

I will not talk here detail about what eBPF is. A lot of posts have already been published about the eBPF and in a variety of languages. Although many of these are fairly informative, they don’t answer the most important questions: How does the eBPF process packets and monitor the packet take from the host to the user?. I will describe the process of creating an actual application from the beginning, especially in monitoring requests, responses and process in DNS, gradually enriching the functionality and accompanying all this with explanations, comments, and links to the source code. And sometimes a little off the side because you want to give a few more examples, not just a solution to a specific problem. As a result, I hope those who want to get acquainted with eBPF will spend less time searching for useful materials and start programming faster.
## Introduction

Let’s say the host can send legitimate DNS requests, but the IP addresses it will send them are unknown. In the network filter log, you can see that the requests are still coming. But it’s not clear — is this just legitimate, or is the information already leaking to the attackers? It would be easier if the domain to which the server sends data were known. Unfortunately, PTR is out of fashion, and securitytrails show either nothing or too much on this IP.
