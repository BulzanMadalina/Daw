﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2.Models
{
    public class Product
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public int Price { get; set; }

        public string Description { get; set; }
    }
}
